
import ContactCard from "../components/ContactCard"
import styles from "./contact.module.css"
import ContactForm from "../components/ContactForm"


const Contact = ()=> {
    return(
        <>
        <div className={styles.container}>
        <h1>Contact Us</h1>
        <ContactCard />
        </div>

        <section className={styles.contact_section}>
            <h2>We Love to hear <span>from you</span></h2>

            <ContactForm />
        </section>

        
        </>
    )
}

export default Contact