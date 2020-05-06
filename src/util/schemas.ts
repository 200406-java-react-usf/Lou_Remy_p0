export interface CustomerSchema {
    id: number,
    firstname: string,
    lastname: string,
    email: string
}

export interface TransactionSchema {
    TransactionId:number;
    Cost:number;
    Type:string;
    CustomerId:number;
}

export interface BikeSchema {
    SerialNumber: number;
    Brand: string;
    Model: string;
    Price: number
}