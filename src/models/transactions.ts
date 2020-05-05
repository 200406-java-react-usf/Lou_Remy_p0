export class Transactions{
    txid:number;
    cost:number;
    type:string;
    custid:number;
    //serial:number
    constructor(tid,id,cost,typ,s){
        this.txid = id
        this.cost = cost
        this.type = typ
        this.custid = id
        //this.serial = s
    }
    
}