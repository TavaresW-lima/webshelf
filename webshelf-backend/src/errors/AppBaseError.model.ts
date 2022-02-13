export class AppBaseError extends Error {
    constructor(
        public message: string,
        public status: number,
        public error?: string
    ) {
        super(message)
    }
}