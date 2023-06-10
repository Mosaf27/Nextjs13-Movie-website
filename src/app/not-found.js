import styles from "../app/styles/common.module.css"
import Link from "next/link";


const NotFound = () => {
    return (
        <section className={styles.container}>
        <div className={styles.error_page}>
          <h1>404</h1>
          <h2>Could not find requested resource</h2>
        
          <Link href='/'>
          <button>
            return to home page
          </button>
          </Link>
        </div>
        </section>
    );
}

export default NotFound;