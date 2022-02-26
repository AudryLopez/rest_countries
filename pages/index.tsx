import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Header from "../components/header/header";
import Card from "components/card/card";
import { useState, useEffect } from "react";

const Home: NextPage = () => {
  const [search, setSeach] = useState<string|null>(null);
  const [load, setLoad] = useState(false);
  const [country, setCountry] = useState<string|null>(null);

  useEffect(() => {
    const data = async (country: any) => {
      setLoad(true);
      const response = await fetch(
        `https://restcountries.com/v3.1/name/${country}`
      ).then((res) => res.json());
      if(!response) throw Error("not found")
      setCountry(response);
    };
    if (search) data(search);
    setLoad(true);
  });

  return (
    <div className={styles.container}>
      <Head>
        <title>Countries App</title>
        <meta name="description" content="Api to find all countries" />
        <link rel="icon" href="../components/img/globe.svg" />
      </Head>

      <Header />
      <main className={styles.main}>
        <section className={styles.countriesContainer}>
          <nav className={styles.selectContainer}>
            <input
              type="text"
              placeholder="Find your country.."
              className={styles.input}
              onChange={(e)=>{setSeach(e.target.value)}}
            />
            <select className={styles.select} placeholder="Find your country..">
              <option
                value="Africa"
                onClick={() => {
                }}
              >
                Africa
              </option>
              <option
                value="America"
                onClick={() => {
                }}
              >
                America
              </option>
              <option
                value="Asia"
                onClick={() => {
                }}
              >
                Asia
              </option>
              <option value="Europa"onClick={()=>{}}>Europa</option>
              <option value="Oceania"onClick={()=>{}}>Oceania</option>
            </select>
          </nav>
          {country ? [country].map((data: any, index: number) => {
            console.log(data.name.common);

          }):
          <>
            <Card country="Argentina" />
            <Card country="france" />
            <Card country="mexico" />
            <Card country="Germany" />
            <Card country="Kenya" />
            <Card country="yemen" />
            <Card country="Libya" />
            <Card country="Nepal" />
          </>
          }
        </section>
      </main>
    </div>
  );
};

export default Home;
