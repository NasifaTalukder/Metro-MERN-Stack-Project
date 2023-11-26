import mongoose from 'mongoose';

const userSchema=new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    userName:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true
    },
    profile:String,
       
    

})
export default mongoose.model.users|| mongoose.model('user',userSchema)


