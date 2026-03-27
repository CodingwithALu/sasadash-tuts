export default interface AuthenticationService {
    isAuthen: () => Promise<boolean>;
    saveAuthen: (token: string) => Promise<void>;
    savePhone: (phone: string) => Promise<void>;
    getAuthen: () => Promise<string | null>;
    getPhone: () => Promise<string | null>;
    clearAuthen: () => Promise<void>;
}