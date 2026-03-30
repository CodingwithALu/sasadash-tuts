
import { launchCamera, launchImageLibrary } from "react-native-image-picker"
import { Image, getImageMetaData } from "react-native-compressor"

const MAX_IMAGE_SIZE = 1024 * 1024 * 0.05

export class RNPickerCameraService implements CameraService {
  async openCamera(): Promise<LocalImage | null> {
    const result = await launchCamera({
      mediaType: "photo",
      cameraType: "back",
      includeBase64: true,
      quality: 0.2, // reduce the size of the image
    })

    if (result.didCancel) return null
    if (result.errorCode) {
      if (result.errorCode === "camera_unavailable") {
        throw new Error(camera_unavailable_text)
      } else if (result.errorCode === "permission") {
        throw new Error(permission_text)
      } else if (result.errorCode === "others") {
        // console.log(result.errorMessage)
        throw new Error(general_text)
      }

      return null
    }

    if (result.assets) {
      const image = result.assets[0]

      // console.log(`==> image size: ${image.fileSize}`)
      // console.log(`==> max size: ${MAX_IMAGE_SIZE}`)

      // check image size
      // if (image.fileSize && image.fileSize > MAX_IMAGE_SIZE) {
      //   // compress image
      //   const targetQuality = MAX_IMAGE_SIZE / image.fileSize;
      //   console.log(`==> target quality: ${targetQuality}`);
      //   const newBase64 = await Image.compress(image.base64 || '', {
      //     quality: targetQuality,
      //   });
      //   const metaData = await getImageMetaData(newBase64);
      //   console.log(metaData);
      //   return {
      //     uri:
      //       'data:image/jpeg;base64,' + newBase64 ||
      //       'data:image/jpeg;base64,' + image.base64 ||
      //       '',
      //     name: image.fileName || `${Math.random() * 10000}.jpg`,
      //   };
      // }
      return {
        uri: "data:image/jpeg;base64," + image.base64 || "",
        name: image.fileName || `${Math.random() * 10000}.jpg`,
      }
    }

    return null
  }
  async openLibrary() {
    const result = await launchImageLibrary({
      mediaType: "photo",
      quality: 0.2,
      includeBase64: true,
    })
    // console.log("uri" + result.assets[0].uri)
    // console.log("base64" + result.assets[0].base64)

    if (result.didCancel) return null
    if (result.errorCode) {
      if (result.errorCode === "camera_unavailable") {
        throw new Error(camera_unavailable_text)
      } else if (result.errorCode === "permission") {
        throw new Error(permission_text_library)
      } else if (result.errorCode === "others") {
        // console.log(result.errorMessage)
        throw new Error(general_text)
      }
      return null
    }
    if (result.assets) {
      const image = result.assets[0]

      // console.log(`==> image size: ${image.fileSize}`)
      // console.log(`==> max size: ${MAX_IMAGE_SIZE}`)

      // check image size
      // if (image.fileSize && image.fileSize > MAX_IMAGE_SIZE) {
      //   // compress image
      //   const targetQuality = MAX_IMAGE_SIZE / image.fileSize;
      //   console.log(`==> target quality: ${targetQuality}`);
      //   const newBase64 = await Image.compress(image.base64 || '', {
      //     quality: targetQuality,
      //     input: 'base64',
      //   });
      //   const metaData = await getImageMetaData(newBase64);
      //   console.log(metaData);
      //   return {
      //     uri:
      //       'data:image/jpeg;base64,' + newBase64 ||
      //       'data:image/jpeg;base64,' + image.base64 ||
      //       '',
      //     name: image.fileName || `${Math.random() * 10000}.jpg`,
      //   };
      // }
      return {
        uri: "data:image/jpeg;base64," + image.base64 || "",
        name: image.fileName || `${Math.random() * 10000}.jpg`,
      }
    }

    return null
  }
}
