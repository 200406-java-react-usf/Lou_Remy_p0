import { Customer } from "./customer";

export class Bike{ 
    serial: number;
    brand: string;
    model: string;
   
    constructor(id,brnd,mdl){
        this.serial = id;
        this.brand = brnd;
        this.model = mdl;
        
    }
}