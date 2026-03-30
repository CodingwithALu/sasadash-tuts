import type DataApiService from "@/services/DataApiServices";
import type DataSocketService from "./DataSocketService";
import type DataApiSocketService from "./DataApiSocketService";
import type AuthenticationService from "./AuthenticationService";
import type LocationService from "./LocationService";
import type LaunchNavigatorService from "./LaunchNavigatorService";
import type LoginHelperService from "./LoginHelperService";
import type UserProfileService from "./UserProfileService";
import type StorageService from "@/services/StorageService";


export interface AppProps {
    dataService: DataApiService
  dataSocketService: DataSocketService
  dataApiSocketService: DataApiSocketService
  authenService: AuthenticationService
  locationService: LocationService
  launchNavigatorService: LaunchNavigatorService
  loginHelperService: LoginHelperService
  profileService: UserProfileService
  cameraService: undefined
  storageService: StorageService
}
