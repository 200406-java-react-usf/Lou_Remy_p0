import { Bike } from '../models/bikes'
import { BikeRepo } from '../repos/bike-repo'
import  { isValidObject }  from '../util/validator'
import {
    ResourceNotFoundError,
    BadRequestError,
    ResourcePersistenceError,
    
} from '../errors/errors'

export class BikeService {
    constructor(private bikeRepo: BikeRepo){
        this.bikeRepo = bikeRepo
    }

    async getAllBikes(): Promise<Bike[]> {
        let bikes = await this.bikeRepo.getall()
        if (Object.keys(bikes).length === 0){
            throw new ResourceNotFoundError()
        }
            return bikes
        
    }

    async getBikesByUniqueKey(queryObj:any): Promise<Bike[]>{
        
        try {
            let queryKeys = Object.keys(queryObj)
            let key = queryKeys[0];
            let val = queryObj[key]
            let bike = await this.bikeRepo.getByUniqueKey(key, val)
            return bike
        }
        catch(e){
            throw e
        }
        
    }

    async addBike(newBike: Bike): Promise<Bike>{

        try{
            if(!isValidObject(newBike)){
                throw new BadRequestError('Invalid property values found in provided user.');
            }
        }catch(e){
            e
        }

        //let serialAvailable = await this.isSerialAvailable(newBike.serial)

        // if (!serialAvailable) {
        //     throw new  ResourcePersistenceError('Serial number conflict');
        // }

        let persistedbike = await this.bikeRepo.save(newBike)
        return persistedbike
    }

// couldn't get working right
    // private async isSerialAvailable(serial: Number): Promise<boolean> {
        
    //     try {
    //         await this.getBikesByUniqueKey({'SerialNumber': serial});
    //     } catch (e) {
    //         console.log('no serial number conflict')
    //         return true;
    //     }

    //     console.log('Serial number conflict')
    //     return false;
    // }



}

