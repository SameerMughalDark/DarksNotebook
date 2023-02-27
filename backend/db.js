const mongoose=require('mongoose');
const mongooseUrl='mongodb://localhost:27017/sameer';

const connectToMongoose=()=>{
    mongoose.connect(mongooseUrl,()=>{
            console.log('Connect ho gaya mery mongoDB ky sath');
    })
}

module.exports = connectToMongoose;