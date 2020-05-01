import { Bike } from "./bikes";

export class Customer{
    id:number;
    name: string;
    email:string;
    owns: Bike;


    constructor(id,n,email,owns){
        this.id =id
        this.name=n
        this.owns = owns
        this.email = email
    }
}