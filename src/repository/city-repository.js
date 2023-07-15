const {City} = require('../models/index');

class CityRepository{
    async createCity({name}) {  // here we will be recieving the object but we can do the 
       try{                    // destructuring of the object here only this way //
           const city = await City.create({name});
           return city;
       }catch(error){
           throw {error};
       }
    }
    async deleteCity({cityId}){
        try{
           await City.destroy({
            where : {
                id: cityId
            }
           });
        }catch(error){
            throw {error};
        }
    }
}

module.exports = CityRepository; // here we have exported the class 

