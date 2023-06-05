import Image from "next/image";
import styles from "../../styles/common.module.css"

const Movie = async ({params})=>{

const id = params.id;

const url = `https://netflix54.p.rapidapi.com/title/details/?ids=${id}&lang=en`;

const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': process.env.RAPID_API_KEY,  /*api key stored in env file */
      'X-RapidAPI-Host': 'netflix54.p.rapidapi.com'
    }

  };

  const response = await fetch(url, options);
  const data = await response.json();
  const mainData = data[0].details;

    return(
        <>
        <div className={styles.container}>
            <h2 className={styles.movie_title}>Netflix <span>{mainData.type}</span></h2>
            <div className={styles.card_section}>
                <div>
                <Image 
                src ={mainData.backgroundImage.url}
                width={600}
                height={300}
                alt={mainData.title}/>
                </div>
                <div>
                    <h1>{mainData.title}</h1>
                    <p>{mainData.synopsis}</p>
                </div>
            </div>
        </div>
        </>
    )
}

export default Movie