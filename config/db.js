const mongoose = require('mongoose')
const colors =  require('colors')


// function mongodb database connecton

 const connectdB = async () =>{
    try {
        await mongoose.connect(process.env.MONGO_URL)
        console.log(`Connected to database ${mongoose.connection.host}`.bgCyan);
        
    } catch (error) {
        console.log('DB error',error.bgRed);
        
    }
}

module.exports = connectdB;
