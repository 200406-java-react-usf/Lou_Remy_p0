// inventory

class Product{ 
    id: number;
    name: string;
    cat: string;
    constructor(id,n,c){
        this.id = id;
        this.name = n;
        this.cat = c;
    }
}



//Customer List

class Customer{
    id:number;
    firstname: string;
    lastname: string;
    owns: string;
    email:string;


    constructor(id,fn,ln,owns,email){
        this.id =id
        this.firstname=fn
        this.lastname =ln
        this.owns = owns
        this.email = email
    }
}