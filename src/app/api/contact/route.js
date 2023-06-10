import dbConnect from "@/utils/dbConnect";
import Contact from "../../../models/contact";
import { NextResponse } from "next/server";


export async function POST(req, res){

 try {
    
    const body =  await req.json(); //write this instead of "req.body"

    await  dbConnect();    //connect to the database code written in dbConnect.js file

    await Contact.create(body);  //instead  of contact.save in mongoose use contact.create(body) "body"
                                   //is  the data that user enters or submits in the form

    return NextResponse.json({                       //next response is custom returns a message with status 
        message: "form submitted successfully"      //code message can be edited       
    }, {
        status: 200
    })

 } catch (error) {
    
        return NextResponse.json({                             //if error is thrown show the error message
            message: "server error please try again",
            status: 500
        })
 }   


}