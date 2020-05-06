class AppError {
    statuscode: number;
    message: string;
    reason: string;

    constructor(statuscode: number, rsn?:string){
        
        this.message = 'An unexpected Error occurred'
        rsn? (this.reason = rsn): this.reason = 'Unspecified Reason'
    
    }
    setMessage(message: string){
        this.message = message
    }
}

class ResourceNotFoundError extends AppError{
    constructor(reason?: string){
        super(404, reason);
        super.setMessage('No resource found using this criteria')
    }
}

class ResourcePersistenceError extends AppError{
    
    constructor(reason?: string) {
        super(409, reason);
        super.setMessage('No resource found using provided criteria')
    }

}

class BadRequestError extends AppError {

    constructor(reason?: string){
        super(400, reason);
        super.setMessage('invalid parameters provided')
    }
}

class AuthenticationError extends AppError {

    constructor(reason?: string){
        super(401, reason);
        super.setMessage('Authentication failed')
    }
}

class NotImplemented extends AppError {
    constructor(reason?: string) {
        super(403, reason);
        super.setMessage('no implementation yet')
    }
}

class InternalServerError extends AppError {
    constructor(reason?: string){
        super(500, reason);
        super.setMessage('Internal server error')
    }
}

    

export {
    NotImplemented,
    AuthenticationError,
    BadRequestError,
    ResourcePersistenceError,
    ResourceNotFoundError,
    InternalServerError
}

