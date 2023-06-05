import Link from "next/link";
import styles from "../styles/navbar.module.css"
import Image from "next/image";


const Navbar = ()=>{
    return(
        <nav className={styles.navbar}>
            <div>
            <ul className={styles.navbarList}>
                <li className={styles.navbarItem}>
                <Link href="/">
                    Home
                </Link>
                </li>
                <li className={styles.navbarItem}>
                <Link href="/about">
                    About
                </Link>
                </li>
                <li className={styles.navbarItem}>
                <Link href="/movie">
                Movie
                </Link>
                </li>
                <li className={styles.navbarItem}>
                <Link href="/contact">
                Contact us
                </Link>
               
                </li>
            </ul>
            </div>
        </nav>
    )
        
}

export default Navbar;