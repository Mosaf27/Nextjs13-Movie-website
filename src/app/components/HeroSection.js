import heroStyles from "../styles/herosection.module.css"
import styles from '../styles/common.module.css'
import Image from "next/image";
import Link from "next/link";

//title and imageUrl are props of the hero section component
const HeroSection = ({title, imageUrl}) => {
    return (
    <main className={heroStyles.main_section}>
        <div className={styles.container}>
          <div className={styles.grid_two_section}>
            <div className={heroStyles.hero_content}>
             <h1 >{title}</h1>
               <p >Specially curated list of top movies and tv-shows at your finger tips watch anywhere anytime!!!</p>
                 <Link href='/movie'>
                 <button>
                    Explore Movies
                 </button>
                 </Link>
                 </div>
                 
                <div className={heroStyles.hero_image}>
                    <Image
                    src ={imageUrl}
                    height={500}
                    width={500} 
                    alt="hero-section image"/>
                </div>

             
          </div>
         </div>
    </main>
    );
}

export default HeroSection;