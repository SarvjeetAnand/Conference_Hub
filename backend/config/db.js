const mongoose = require ('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI,{
            // userNewUrlParser : true,
            // userUnifiedTopology : true,
        });
       // console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit(1);
        
    }
};
module.exports = connectDB;