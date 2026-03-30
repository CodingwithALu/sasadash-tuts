import type AuthenticationService from "@/interface/AuthenticationService"
import type CameraService from "@/interface/CameraService"
import type DataApiSocketService from "@/interface/DataApiSocketService"
import type DataSocketService from "@/interface/DataSocketService"
import type LaunchNavigatorService from "@/interface/LaunchNavigatorService"
import type LocationService from "@/interface/LocationService"
import type LoginHelperService from "@/interface/LoginHelperService"
import type UserProfileService from "@/interface/UserProfileService"
import type DataApiService from "@/services/DataApiServices"
import type StorageService from "@/services/StorageService"
import { createContext, useContext, type PropsWithChildren } from "react"


const ServiceContext = createContext<{
    dataService: DataApiService | null
    dataSocketService: DataSocketService | null
    dataApiSocketService: DataApiSocketService | null
    authenService: AuthenticationService | null
    locationService: LocationService | null
    cameraService: CameraService | null
    launchNavigatorService: LaunchNavigatorService | null
    loginHelperService: LoginHelperService | null
    profileService: UserProfileService | null
    storageService: StorageService | null
}>({
    dataService: null,
    dataSocketService: null,
    dataApiSocketService: null,
    authenService: null,
    locationService: null,
    cameraService: null,
    launchNavigatorService: null,
    loginHelperService: null,
    profileService: null,
    storageService: null,
})

interface ServiceProviderProps extends PropsWithChildren {
    dataService?: DataApiService
    dataSocketService?: DataSocketService
    dataApiSocketService?: DataApiSocketService
    authenService?: AuthenticationService
    locationService?: LocationService
    cameraService?: CameraService
    launchNavigatorService?: LaunchNavigatorService
    loginHelperService?: LoginHelperService
    profileService?: UserProfileService
    storageService: StorageService
}

export default function ServicesProvider(props: ServiceProviderProps) {
    return (
        <ServiceContext.Provider
            value={{
                dataService: props.dataService || null,
                dataSocketService: props.dataSocketService || null,
                dataApiSocketService: props.dataApiSocketService || null,
                authenService: props.authenService || null,
                locationService: props.locationService || null,
                cameraService: props.cameraService || null,
                launchNavigatorService: props.launchNavigatorService || null,
                loginHelperService: props.loginHelperService || null,
                profileService: props.profileService || null,
                storageService: props.storageService || null,
            }}
        >
            {props.children}
        </ServiceContext.Provider>
    )
}

export function useDataService() {
    const { dataService } = useContext(ServiceContext)
    return dataService!
}

export function useDataApiSocketService() {
    const { dataApiSocketService } = useContext(ServiceContext)
    return dataApiSocketService!
}

export function useDataSocketBaseService() {
    const { dataSocketService } = useContext(ServiceContext)
    return dataSocketService!
}

export function useAuthenService() {
    const { authenService } = useContext(ServiceContext)
    return authenService!
}

export function useLocationService() {
    const { locationService } = useContext(ServiceContext)
    return locationService!
}

export function useCameraService() {
    const { cameraService } = useContext(ServiceContext)
    return cameraService!
}

export function useLaunchNavigatorService() {
    const { launchNavigatorService } = useContext(ServiceContext)
    return launchNavigatorService!
}

export function useLoginHelperService() {
    const { loginHelperService } = useContext(ServiceContext)
    return loginHelperService!
}

export function useProfileService() {
    const { profileService } = useContext(ServiceContext)
    return profileService!
}

export function useStorageService() {
    const { storageService } = useContext(ServiceContext)
    return storageService
}
