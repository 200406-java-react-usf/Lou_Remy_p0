import url from 'url';
import express = require('express');
import AppConfig from '../config/app'
import { isEmptyObject } from '../util/validator'
import{ ParsedUrlQuery } from 'querystring'
import { Customer } from '../models/customer'
import { CustomerRepo } from '../repos/customer-repo'


export const CustRouter = express.Router();

const customerService = AppConfig.customerService
//fetchs all custs from db
CustRouter.get('', async( req, resp)=>{
    try{
        let reqURL = url.parse(req.url, true)
        if(!isEmptyObject<ParsedUrlQuery>(reqURL.query)){
            let payload = await customerService.getCustbyUniqueKey({...reqURL.query})
            resp.status(200).json(payload)
        }
        let payload = await customerService.getAllCustomers();
        resp.status(200).json(payload)
    }catch(e){
        resp.status(404).json(e)
    }
})

//allows us to send post req to add a Customer
CustRouter.post('', async( req, resp)=>{
    console.log(req.body)

    try{
        let newCust = await customerService.addCustomer(req.body)
        return resp.status(201).json(newCust)
    }catch(e){
        return resp.status(404).json(e)
    }
})

//makes it so I can use the URL as parameters
CustRouter.get('/:x/:val', async (req,resp)=>{
const id = req.params.x;
const val = req.params.val;

//console.log(id,val)
 try{
     let payload = await customerService.getCustbyUniqueKey({[id]:val})
     resp.status(200).json(payload)
 }catch(e){
        resp.status(404).json(e)}
})