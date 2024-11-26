import styles from "./page.module.css";

interface NasaData {
  date: string;
  explanation: string;
  title: string;
  url: string;
}

function NasaImages({date, explanation, title, url}: NasaData) {
  return(
    <div key={url} className={styles.nasa_images}>
      <h2>{title}</h2>
      <img src={url} alt={title} />
      <p>{date}</p>
      <p>{explanation}</p>
    </div>
  )
}
export default async function App() {
  const nasaData = await getNasaData(7);
  return(
    <main>
      <h1 className={styles.hey}>NASA API</h1>
      <div>
        {nasaData}
      </div>
    </main>
  )
}

async function getNasaData(count : number) {
  // 1. Make the GET request and await the HTTP Response
  const response = await fetch('https://api.nasa.gov/planetary/apod?api_key='+ process.env.NASA_API_KEY + '&count=' + count);
  // 2. Get the JSON data from the response
  const jsonData = await response.json();
  const nasaData = Array.isArray(jsonData) ? jsonData.map((item: NasaData) => 
    <NasaImages key={item.url} date={item.date} explanation={item.explanation} title={item.title} url={item.url} />
  ) : [];
  return (
    <div className={styles.nasa_container}>
      {nasaData}
    </div>
  );
}