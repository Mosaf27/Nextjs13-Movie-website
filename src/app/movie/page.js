import MovieCard from "../components/MovieCard";
import styles from "../styles/common.module.css"



const Movie = async ()=>{



const url = 'https://netflix54.p.rapidapi.com/search/?query=stranger&offset=0&limit_titles=50&limit_suggestions=20&lang=en';

const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': process.env.RAPID_API_KEY,
    'X-RapidAPI-Host': 'netflix54.p.rapidapi.com'
  }
};


    const response = await fetch(url, options);
    const data = await response.json();
    const mainData = data.titles;

    console.log(data);



    return(
        <>
        <section className={styles.movieSection}>
            <div className={styles.container}>
                <h1>Movies & Series</h1>
        {mainData.map((curElem) =>{
            return <MovieCard key={curElem.id} {...curElem}/>
        })}
            </div>
        </section>
        </>
    )
}

export default Movie