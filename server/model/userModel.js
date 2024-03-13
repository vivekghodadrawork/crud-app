import mongoose from "mongoose";

const userSchema = new mongoose.Schema({

    fname :{
        type : String,
     
    },
    lname :{
        type : String,
        
    },
    email :{
        type : String,
     
    },
    password :{
        type : String,
      
    }

})

export default mongoose.model("User",userSchema);