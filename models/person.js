const mongoose=require('mongoose');
//define person schema
const personSchema=new mongoose.Schema({
    name : {
        type:String,
        required:true
    },
    age :{
        type:Number,
        required:true
    },
    mobile:{
        type:Number,
        required:true
    },
    email:{
        type:String,
        reuired:true,
       
    },
    work:{
        type:String,
        required:true,
        enum:['chef','manager','waiter']
    }
});
//create model const mongoose=require('mongoose');for person
const Person = mongoose.model('Person',personSchema);
module.exports=Person;
