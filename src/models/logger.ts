class Logger {
    private shouldLog: boolean = false

    constructor() {
        this.shouldLog = import.meta.env.DEV
    }
    log(message: any, ...optionalParams: any[]) {
        if (this.shouldLog) {
            console.log(message, ...optionalParams)
        }
    }
}
export const logger = new Logger();