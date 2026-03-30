import { Instance, SnapshotOut, types } from "mobx-state-tree"
import { createConfigDefaultModel } from "./ConfigModel"
import { createServiceBookDefaultModel } from "./ServiceBookModel"
import { createServiceOptionsDefaultModel } from "./ServiceOptionsModel"
import { createWalletDefaultModel } from "./WalletModel"
import { createBookForCustomerDefaultModel } from "./BookForCustomerModel"
import { createVoucherDefaultModel } from "./VoucherModel"

/**
 * A RootStore model.
 */
export const RootStoreModel = types.model("RootStore").props({
  configStore: createConfigDefaultModel(),
  serviceBookStore: createServiceBookDefaultModel(),
  serviceOptionsStore: createServiceOptionsDefaultModel(),
  walletStore: createWalletDefaultModel(),
  bookForCustomerStore: createBookForCustomerDefaultModel(),
  voucherStore: createVoucherDefaultModel(),
})

/**
 * The RootStore instance.
 */
export interface RootStore extends Instance<typeof RootStoreModel> {}
/**
 * The data of a RootStore.
 */
export interface RootStoreSnapshot extends SnapshotOut<typeof RootStoreModel> {}
