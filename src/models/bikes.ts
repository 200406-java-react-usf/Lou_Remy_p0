import { Customer } from "./customer";

export class Bike{ 
    serial: number;
    brand: string;
    model: string;
    price: number
    constructor(id,brnd,mdl,price){
        this.serial = id;
        this.brand = brnd;
        this.model = mdl;
        this.price =price
    }
}