import { Bike } from "./bikes";

export class Customer{
    id:number;
    firstname: string;
    lastname:string;
    email: string;


    constructor(id,fn,ln,email){
        this.id =id
        this.firstname= fn
        this.lastname = ln
        this.email = email
    }
}