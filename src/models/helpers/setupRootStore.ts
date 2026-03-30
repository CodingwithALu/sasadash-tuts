/**
 * This file is where we do "rehydration" of your RootStore from AsyncStorage.
 * This lets you persist your state between app launches.
 *
 * Navigation state persistence is handled in navigationUtilitiesx.
 *
 * Note that Fast Refresh doesn't play well with this file, so if you edit this,
 * do a full refresh of your app instead.
 *
 * @refresh reset
 */
import { applySnapshot, getSnapshot, IDisposer, onSnapshot, SnapshotOut } from "mobx-state-tree"
import { RootStore, RootStoreSnapshot } from "../RootStore"
import * as storage from "../../utils/storage"
interface IPersistor<Store> {
  version: number
  whitelist?: Array<keyof SnapshotOut<Store> & string>
  blacklist?: Array<keyof SnapshotOut<Store> & string>
}

type RootStorePersistor = {
  [Key in keyof Omit<RootStore, "__MstQueryAction" | "__getModelStores" | "getQueries" | "runGc"> &
    string]?: IPersistor<RootStore[Key]>
}

export const persistorConfig: RootStorePersistor = {
  serviceBookStore: {
    version: 1,
    whitelist: ["recentAddresses", "currentLocation"],
  },
  configStore: {
    version: 3,
    whitelist: [],
    blacklist: ["banners", "listActiveBanner", "isOpenBanner"],
  },
  voucherStore: {
    version: 1,
  },
}

/**
 * Setup the root state.
 */
const _disposer: Map<string, IDisposer | undefined> = new Map()
export async function setupRootStore(rootStore: RootStore) {
  for (const key in persistorConfig) {
    const { version, ...config } = (persistorConfig as any)[key] as IPersistor<string>

    /**
     * The key we'll be saving our state as within async storage.
     */
    const keyWithVersion = `${key}-v${version}`

    try {
      // load the last known state from AsyncStorage
      const rehydrateStore = (await storage.load(keyWithVersion)) as RootStoreSnapshot | null

      if (rehydrateStore) {
        applySnapshot(
          (rootStore as any)[key],
          Object.assign({}, getSnapshot((rootStore as any)[key]), rehydrateStore),
        )
      }
    } catch (e) {
      // if there's any problems loading, then inform the dev what happened
      if (__DEV__) {
        // console.tron.error?.((e as any).message, null);
      }
    }

    // stop tracking state changes if we've already setup
    if (_disposer.has(key)) _disposer.get(key)?.()

    // track changes & save to AsyncStorage
    _disposer.set(
      key,
      onSnapshot((rootStore as any)[key], async (snapshot) => {
        let dataPersist: any = null

        if (config.whitelist) {
          if (config.whitelist.length > 0) {
            dataPersist = config.whitelist.reduce((prev, cur) => {
              // @ts-ignore
              return { ...prev, [cur]: snapshot[cur] }
            }, {})
          } else {
            dataPersist = Object.assign({}, snapshot)
          }
        }

        if (config.blacklist && config.blacklist.length > 0) {
          config.blacklist.forEach((key) => {
            delete dataPersist[key]
          })
        }

        storage.save(keyWithVersion, dataPersist)
      }),
    )
  }

  const unsubscribe = () => {
    _disposer.forEach((disposer) => {
      disposer?.()
    })
    _disposer.clear()
  }

  return { rootStore, unsubscribe }
}
