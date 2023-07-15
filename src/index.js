const express = require("express");

const {PORT} = require('./config/ServerConfig');

const bodyParser = require("body-parser");
const CityRepository = require('./repository/city-repository'); // here i have required the class 

const setupAndStartServer =  async ()=> {
     //  create the express object  
     const app = express();
     app.use(bodyParser.json());
     app.use(bodyParser.urlencoded({extended: true}));
     
    app.listen(PORT,async ()=> {
        console.log(`Server started at ${PORT}`);  
        const repo = new CityRepository();// new object of the class city repository // 
        repo.createCity({name:"New Dehli"});
        
     }); 
     
}


setupAndStartServer(); 