import Image from "next/image"
import styles from "../../styles/globals.module.css"
import Country from "../../types/country"
import { useState, useEffect } from "react";

export default function Countries(props: { country: string }) {
  const [countryName, setCountry] = useState<any>();
  const [loadata, setdata] = useState(false);

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
      nativeName: data.nativeName,
      topLevelDomain: data.topLevelDomain,
      currencies: data.currencies,
      languages: data.languages,
      borders: data.borders,
    }));
    setCountry(res);
    setdata(true)
  };

  useEffect(() => {
    getCountry(props.country);
  }, [props.country]);
  
  return (
    countryName ? 
    countryName.map((data: any, index: number) =>{
    return(
    <section key={index} className={styles.main}>
      <Image src={data.flags.svg} alt={`flag of ${data.name}`} />
      <div className={styles.country}>
        <h1 className={styles.title}>{data.name}</h1>
        <article>
          <h1 className={styles.title}>Native Name: {data.nativeName}]</h1>
          <h1 className={styles.title}>Population: {data.population}</h1>
          <h1 className={styles.title}>Region: {data.region}</h1>
          <h1 className={styles.title}>Sub Region: {data.subregion}</h1>
          <h1 className={styles.title}>Capital: {data.capital}</h1>
          <h1 className={styles.title}>Top Level Domain: {data.topLevelDomain}</h1>
          <h1 className={styles.title}>Currencies: {data.currencies}</h1>
          <h1 className={styles.title}>Languages: {data.languages}</h1>
        </article>
        <h1 className={styles.title}>Border Contries: {data.borders}</h1>
      </div>
    </section>
    )}):
    <h2>data not found</h2>
  );
}
