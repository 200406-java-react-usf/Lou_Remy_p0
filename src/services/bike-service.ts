import { Bike } from '../models/bikes'
import { BikeRepo } from '../repos/bike-repo'
import { ResourceNotFoundError } from '../errors/errors';

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

    async getBikesByUniqueKey(queryObj:any): Promise<Bike>{
        
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


}

