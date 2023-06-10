 import Link from "next/link";
import styles from "../styles/common.module.css"
import Image from "next/image";

 
 const MovieCard = (curElem) => {      /* curElem prop passed to moviecard component through api */

    const {id, type, title, synopsis} = curElem.jawSummary;  /* destructuring curElem array    */

    return (
        <>
        <div className={styles.card}>
            <div className={styles.card_image}>
                <Image 
                src={curElem.jawSummary.backgroundImage.url}
                width={260}
                height={200}
                alt={title}/>
            </div>

            <div className={styles.card_data}>
                <h2>{title.substring(0, 18)}</h2>
                    <p>{synopsis.substring(0, 66)}...</p>

                <Link href={`/movie/${id}`}>   
                <button>See More</button>
                </Link>  
            </div>
        </div>


        </>
    );
 }
 
 export default MovieCard;