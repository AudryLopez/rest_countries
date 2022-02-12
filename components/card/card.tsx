import Image from 'next/image'
import styles from './card.module.css'
import Country from '../../types/country';
import { useState, useEffect } from 'react';
import React from "react";
import { country } from 'pages/api/countries';


function Card() {
  const [countryName, setCountry] = useState<any>();
  const [loading, setloading] = useState(false);

  const getCountry = async () => {
    const response = await fetch(`https://restcountries.com/v3.1/name/peru`).then((res) => res.json())
    const res = response.map((data: Country) => ({
      name: data.name,
      population: data.population,
      region: data.region,
      capital: data.capital,
      flags: data.flags,
    }))
    setCountry(res)
  }
  useEffect(() => {
    getCountry()
  }, []);

  if (!countryName) return <p>Loading...</p>;
  return(
  countryName? countryName.map((data: any, id: number)=>{
    return (
      <div key={id} className={styles.card}>
        <Image
          src={data.flags.svg}
          className={styles.imagen}
          width="100%"
          height="50%"
          layout="responsive"
          alt="flag"
        />

        <div className={styles.cardContainer}>
          <h1 className={styles.title}>{data.name.common}</h1>
          <h3>Population: {data.population}</h3>
          <h3>Region: {data.region}</h3>
          <h3>Capital: {data.capital}</h3>
        </div>
      </div>
    );})
    : ""
  )
}




export default Card;