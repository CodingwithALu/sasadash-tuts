import type UserProfile from "./UserProfile"


export default interface UserProfileService {
  saveUserProfileData(
    name: string,
    avatar: string,
    phoneNumber: string,
    point: number,
  ): Promise<void>
  getUserProfileData(): Promise<UserProfile | null>
}
