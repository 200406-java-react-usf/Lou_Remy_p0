class AppError {
    message: string;
    reason: string;

    constructor(rsn?:string){
        
        this.message = 'An unexpected Error occurred'
        rsn? (this.reason = rsn): this.reason = 'Unspecified Reason'
    
    }
    setMessage(message: string){
        this.message = message
    }
}

class ResourceNotFoundError extends AppError{
    constructor(reason?: string){
        super(reason);
        super.setMessage('No resource found using this criteria')
    }
}

class ResourcePersistenceError extends AppError{
    
    constructor(reason?: string) {
        super(reason);
        super.setMessage('No resource found using provided criteria')
    }

}

class BadRequestError extends AppError {

    constructor(reason?: string){
        super(reason);
        super.setMessage('invalid parameters provided')
    }
}

class AuthenticationError extends AppError {

    constructor(reason?: string){
        super(reason);
        super.setMessage('Authentication failed')
    }
}

class NotImplemented extends AppError {
    constructor(reason?: string) {
        super(reason);
        super.setMessage('no implementation yet')
    }
}

export {
    NotImplemented,
    AuthenticationError,
    BadRequestError,
    ResourcePersistenceError,
    ResourceNotFoundError
}

