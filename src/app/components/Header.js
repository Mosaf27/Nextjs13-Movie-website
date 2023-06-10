import Styles from "../styles/navbar.module.css"
import Image from "next/image";
import Link from "next/link";
import Navbar from "./Navbar";

const Header = ()=>{
    return(
        <header className={Styles.main_header}>
            <div className={Styles.navbar_brand}>
            <Link href="/" >                 
            <Image 
            src="/images/netflix.png"
            height={60}
            width={150}
            alt="logo image"/>
            </Link>
            </div>
            <Navbar />
        </header>
    )
}


export default Header;