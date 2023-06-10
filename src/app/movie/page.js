import { resolve } from "styled-jsx/css";
import { excludeDefaultMomentLocales } from "../../../next.config";
import MovieCard from "../components/MovieCard";
import styles from "../styles/common.module.css"



const Movie = async ()=>{




/* the url to get data from api */
const url = 'https://netflix54.p.rapidapi.com/search/?query=stranger&offset=0&limit_titles=50&limit_suggestions=20&lang=en';

const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': process.env.RAPID_API_KEY,  /*api key stored in env file */
    'X-RapidAPI-Host': 'netflix54.p.rapidapi.com'
  }
};


    const response = await fetch(url, options);  /* fetch data from the url */
    const data = await response.json();          /*convert the data into json format */
    const mainData = data.titles;                   /*extract data from json */



    return(
        <>
        <section className={styles.movieSection}>
            <div className={styles.container}>
                <h1>Movies & Series</h1>
            <div className={styles.card_section}>
        {mainData.map((curElem) =>{          /* map through the data from json and add key */
            return <MovieCard key={curElem.id} {...curElem}/> /* and spread operator prop to movieCard component*/
        })}
            </div>
            </div>
        </section>
        </>
    )
}

export default Movie