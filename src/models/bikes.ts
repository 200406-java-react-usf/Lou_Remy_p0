import { Customer } from "./customer";

export class Bike{ 
    serial: number;
    brand: string;
    model: string;
    owner: Customer
    constructor(id,brnd,mdl,own){
        this.serial = id;
        this.brand = brnd;
        this.model = mdl;
        this.owner = own;
    }
}