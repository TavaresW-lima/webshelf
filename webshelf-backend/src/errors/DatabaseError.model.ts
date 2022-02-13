import { AppBaseError } from './AppBaseError.model';
export class DatabaseError extends AppBaseError {
    constructor(
        public message: string,
        public error?: string
    ) {
        super(message, 500);
    }
}