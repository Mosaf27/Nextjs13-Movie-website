 import Link from "next/link";
import styles from "../styles/common.module.css"
import Image from "next/image";

 
 const MovieCard = (curElem) => {

    const {id, type, title, synopsis} = curElem.jawSummary;

    return (
        <>
        <div className={styles.card}>
            <div className={styles.card_image}>
                <Image 
                src={curElem.jawSummary.backgroundImage.url}
                width={250}
                height={200}
                alt={title}/>
            </div>

            <div className={styles.card_data}>
                <h2>{title}</h2>
                    <p>{synopsis}</p>

                <Link href={`/movie/${id}`}>
                <button>See More</button>
                </Link>  
            </div>
        </div>


        </>
    );
 }
 
 export default MovieCard;