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