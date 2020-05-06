import url from 'url';
import express = require('express');
import AppConfig from '../config/app'
import { isEmptyObject } from '../util/validator'
import{ ParsedUrlQuery } from 'querystring'

export const BikeRouter = express.Router()

const bikeService = AppConfig.bikeService

BikeRouter.get('', async(req, resp)=> {
    try{
        let reqURL = url.parse(req.url, true)
        if(!isEmptyObject<ParsedUrlQuery>(reqURL.query)){
            let payload = await bikeService.getBikesByUniqueKey({...reqURL.query})
            resp.status(200).json(payload)
        }

        let payload = await bikeService.getAllBikes();
        resp.status(200).json(payload)
    } catch(e){
        resp.status(404).json(e)
    }
})


BikeRouter.get('/:x/:val', async (req,resp)=>{
    const id = req.params.x;
    const val = req.params.val;
    
    console.log(id,val)
     try{
         let payload = await bikeService.getBikesByUniqueKey({[id]:val})
         resp.status(200).json(payload)
     }catch(e){
            resp.status(404).json(e)}
    })


    
BikeRouter.post('', async( req, resp)=>{
    console.log(req.body)

    try{
        let newCust = await bikeService.addBike(req.body)
        return resp.status(201).json(newCust)
    }catch(e){
        return resp.status(404).json(e)
    }
})