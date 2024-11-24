import { get } from "http";
import styles from "./page.module.css";
import { Key } from "react";

interface NasaData {
  date: string;
  explanation: string;
  title: string;
  url: string;
}
export default async function Demos() {
  const nasaData = await getNasaData(4);
  return(
    <main>
      <h1 className={styles.hey}>NASA API</h1>
      <div>
        {nasaData}
      </div>
    </main>
  )
  // return (
  //   <div>
  //     <h1 className={styles.hey}>{nasaData}</h1>
  //   </div>
  // );
  // return nasaImages;
}

async function getNasaData(count : number) {
  // 1. Make the GET request and await the HTTP Response
  const response = await fetch('https://api.nasa.gov/planetary/apod?api_key='+ process.env.NASA_API_KEY + '&count=' + count);
  // 2. Get the JSON data from the response
  const jsonData = await response.json();
  const nasaData = jsonData.map((item: NasaData) => 
    <div key={item.url} className="Nasa Images">
      <h2>{item.title}</h2>
      <p>{item.date}</p>
      <p>{item.explanation}</p>
      <img src={item.url} alt={item.title} />
    </div>
  )
  return (
    <div>
      {nasaData}
    </div>
  );
}
