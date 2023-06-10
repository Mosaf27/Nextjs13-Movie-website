import Link from "next/link";
import styles from "../contact/contact.module.css"
import {MdEmail, MdVoiceChat, MdForum} from "react-icons/md";


const ContactCard = () => {
    return (
        <div className={styles.section}>
            <div className={styles.container}>
            <div className={styles.grid}>
                <div className={styles.grid_card}>
                    <i><MdEmail/></i>
                    <h2>Email</h2>
                    <p>Monday to Friday Expected</p>
                    <p className={styles.last_para}>response time: 72 hours</p>
                    <Link href="/">Send Email</Link>
                </div>

                <div className={styles.grid_card}>
                    <i><MdVoiceChat/></i>
                    <h2>Live Chat</h2>
                    <p>Active 24 hours</p>
                    <p className={styles.last_para}>response time: 72 hours</p>
                    <Link href="/">Chat Now!!!</Link>
                </div>

                <div className={styles.grid_card}>
                    <i><MdForum/></i>
                    <h2>Community Forum</h2>
                    <p>Join our Community Online</p>
                    <p className={styles.last_para}>response time: 72 hours</p>
                    <Link href="/">Join Now</Link>
                </div>
            </div>
            </div>
        </div>
    );
}

export default ContactCard;