
import express = require('express');

import { Customer } from '../models/customer'
import { CustomerRepo } from '../repos/customer-repo'
import { REPLServer } from 'repl';

export const CustRouter = express.Router();

const custRepo = CustomerRepo.getInstance();

CustRouter.get('/', async( req, resp)=>{
    try{
        let payload = await custRepo.getall();
    }catch(e){
        resp.status(404).json(e)
    }
})

