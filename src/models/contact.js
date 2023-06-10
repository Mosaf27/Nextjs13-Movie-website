import mongoose, { Schema } from "mongoose";

const contactSchema = new Schema({    //new schema
    username:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    phone:{
        type: String,
        required: true
    },
    message:{
        type: String,
        required: true
    },
    
},
{ timestamps: true }        //If you set timestamps: true, Mongoose will add two properties of type Date to your schema:
)


const Contact = mongoose.models.Contact || mongoose.model('Contact', contactSchema); //new model for contactSchema

export default Contact;