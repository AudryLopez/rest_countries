import Image from 'next/image'
import styles from './card.module.css'
import Country from '../../types/country';
import { useState, useEffect } from 'react';
import React from "react";

function Card(prop: { country: string }) {
  const [countryName, setCountry] = useState<any>();

  const getCountry = async (countries: string) => {
    const response = await fetch(
      `https://restcountries.com/v3.1/name/${countries}`
    ).then((res) => res.json());
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
    getCountry(prop.country);
  }, [prop.country]);

  return countryName ? (
    countryName.map((data: any, id: number) => {
      return (
        <div key={id} className={styles.card}>
          <Image
            src={data.flags.svg}
            className={styles.imagen}
            width="100%"
            height="60%"
            layout="responsive"
            alt="flag"
          />
          <div className={styles.cardContainer}>
            <h1 className={styles.title}>{data.name.common}</h1>
            <h3 className={styles.subTitle}>Population: {data.population}</h3>
            <h3 className={styles.subTitle}>Region: {data.region}</h3>
            <h3 className={styles.subTitle}>Capital: {data.capital}</h3>
          </div>
        </div>
      );
    })
  ) : (
  <p>Loading...</p>
  );
}




export default Card;