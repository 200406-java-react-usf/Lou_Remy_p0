export interface CustomerSchema {
    id: number,
    firstname: string,
    lastname: string,
    email: string
}

export interface TransactionSchema {
    txid:number;
    custid:number;
    serial:number
    cost:number;
    type:string;
}