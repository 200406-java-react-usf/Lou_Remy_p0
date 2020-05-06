import url from 'url';
import express = require('express');
import AppConfig from '../config/app'
import { isEmptyObject } from '../util/validator'
import{ ParsedUrlQuery } from 'querystring'

export const TxRouter = express.Router()

const txService = AppConfig.txService

TxRouter.get('', async(req, resp)=> {

    
        
    try{
        let reqURL = url.parse(req.url, true)
        if(!isEmptyObject<ParsedUrlQuery>(reqURL.query)){
            let payload = await txService.getTransByUniqueKey({...reqURL.query})
            resp.status(200).json(payload)
        }

        let payload = await txService.getAllTransactions();
        resp.status(200).json(payload)
    } catch(e){
        resp.status(404).json(e)
    }
})

TxRouter.post('', async( req, resp)=>{
    console.log(req.body)

    try{
        let newCust = await txService.addTransaction(req.body)
        return resp.status(201).json(newCust)
    }catch(e){
        return resp.status(404).json(e)
    }
})

TxRouter.get('/:x/:val', async (req,resp)=>{
const id = req.params.x;
const val = req.params.val;

//console.log(id,val)
 try{
     let payload = await txService.getTransByUniqueKey({[id]:val})
     resp.status(200).json(payload)
 }catch(e){
        resp.status(404).json(e)}
})
