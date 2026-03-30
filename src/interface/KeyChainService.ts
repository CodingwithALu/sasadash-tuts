import { Alert, Linking } from "react-native"
import Keychain from "react-native-keychain"
import { MMKVStorage } from "services/StorageService"

export interface IKeychainService {
  saveCredentials(username: string, refreshToken: string): Promise<void>
  loadCredentials(): Promise<{ username: string; refreshToken: string } | null>
  checkBiometry(): Promise<boolean>
  deleteCredentials(): Promise<void>
  isBiometryEnabled(username: string): Promise<boolean>
}

export default class KeychainService implements IKeychainService {
  async saveCredentials(username: string, refreshToken: string) {
    await Keychain.setGenericPassword(username, refreshToken, {
      accessControl: Keychain.ACCESS_CONTROL.BIOMETRY_ANY,
      securityLevel: Keychain.SECURITY_LEVEL.SECURE_HARDWARE,
    })

    //save username to local
    // const user = await StorageService.get("keychain_user");

    MMKVStorage.set("keychain_user", JSON.stringify(username))
  }

  async loadCredentials() {
    try {
      const credentials = await Keychain.getGenericPassword({
        authenticationPrompt: {
          title: "Đăng nhập bằng trắc sinh học",
          // subtitle: 'Please use biometry to retrieve credentials',
          description: "Ứng dụng cần xác thực sinh trắc học để tiến hành đăng nhập",
          cancel: "Huỷ",
        },
      })
      if (credentials) {
        return {
          username: credentials.username,
          refreshToken: credentials.password,
        }
      } else {
        Alert.alert(
          "Đăng nhập bằng trắc sinh học",
          "Bạn cần bật tính năng sinh trắc học trong ứng dụng để sử dụng chức năng.",
        )
      }
      return null
    } catch (error) {
      console.log("error", error)
      Alert.alert(
        "Quyền truy cập sinh trắc học",
        "Ứng dụng cần quyền truy cập sinh trắc học để sử dụng chức năng.",
        [
          {
            text: "Huỷ",
            onPress: () => {
              // console.log("Cancel Pressed")
            },
            style: "cancel",
          },
          {
            text: "Đồng ý",
            onPress: () => Linking.openSettings(),
          },
        ],
      )
      return null
    }
  }

  async checkBiometry() {
    try {
      const type = await Keychain.getSupportedBiometryType()
      // console.log("biometricType", type)
      switch (type) {
        case Keychain.BIOMETRY_TYPE.FACE_ID:
        case Keychain.BIOMETRY_TYPE.FINGERPRINT:
        case Keychain.BIOMETRY_TYPE.FACE:
        case Keychain.BIOMETRY_TYPE.TOUCH_ID:
          return true
        default:
          return false
      }
    } catch (error) {
      // console.log("checkBiometryError", error)
      return false
    }
  }

  async deleteCredentials() {
    await Keychain.resetGenericPassword()
    const user = MMKVStorage.getString("keychain_user")
    if (user) {
      MMKVStorage.delete("keychain_user")
    }
  }

  async isBiometryEnabled(username: string) {
    const user = MMKVStorage.getString("keychain_user")
    if (user) {
      let parsedUser = JSON.parse(user)
      return parsedUser === username
    } else {
      return false
    }
  }
}
