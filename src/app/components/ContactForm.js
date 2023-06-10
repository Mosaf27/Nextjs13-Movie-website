"use client"

import Link from "next/link";
import styles from "../contact/contact.module.css"
import { useState } from "react";

const ContactForm = () => {

    const [user, setUser] = useState({          /* value of user hook is null here and gets updated  */
        username:"",                        /* while user type anything in form input fields */
        email:"",
        phone:"",
        message:""
    })

    const [status, setStatus] = useState(null);    /*status hook updates message fields when user submits data*/

    function handleChange(event){             /*handlechange event when user updates input fields in form */
        
        const name = event.target.name;    /*name of the input field  */
        const value = event.target.value;   /* value of the input field */

        setUser((prevUser)=>({            /* setuser updates user and adds new updated values to it  */
            ...prevUser,             
            [name]: value
        }))

    }


    const handleSubmit = async (event) =>{

        event.preventDefault(); //prevents default refresh while form is submitted

        try {
          
        const response = await fetch("api/contact/", {     /* response fetches api route locally inside app folder*/
            method: "POST",                                 /*sends a POST request*/
            headers:{"content-type":"application/json"},
            body: JSON.stringify({                        /*adds data to the body of POST request*/
                username:user.username,                  /*this data is the data that user enters in the input fields*/
                email:user.email,                        //stringify this data which is in json format
                phone:user.phone,
                message:user.message
            })
                
        
        })
            if (response.status === 200) {    /* if response status is 200 reset input fields to null or empty*/
                setUser({
                    username:"",
                    email:"",
                    phone:"",
                    message:""
                })

            setStatus("success");    /* and set status hook value to success*/

            } else {

            setStatus("error");   /*else if response status is not 200 */
                                  /* set status hook value to error*/  

            }


    
        } catch (error) {
            console.log(error);
        }

    }




    return (
        <form className={styles.contact_form} onSubmit={handleSubmit}>
            <div className={styles.input_field}>
            <label className={styles.label} htmlFor="username"></label>
            <input type="text" onChange={handleChange} id="username" name="username" value={user.username} placeholder="Enter you name"/>
            </div>

            <div className={styles.input_field}>
            <label className={styles.label} htmlFor="Email"></label>
            <input type="email" onChange={handleChange} id="email" name="email" value={user.email} placeholder="Enter your Email"/>
            </div>

            <div className={styles.input_field}>
            <label className={styles.label} htmlFor="phone"></label>
            <input type="number" onChange={handleChange} id="phone" name="phone" value={user.phone} placeholder="Enter your Phone number"/>
            </div>

            <div className={styles.input_field}>
            <label className={styles.label} htmlFor="message"></label>
            <textarea  onChange={handleChange} id="message" name="message" required value={user.message} placeholder="Enter your message" rows={5}/>
            </div>

            <div>
                {status === "success" && <p className={styles.success_msg}>Thank you for your message</p>}
                {status === "error" && <p className={styles.error_msg}>There was a problem submitting your message</p>}
            <button type="submit">Submit</button>
            </div>
        </form>
    );
}



export default ContactForm;