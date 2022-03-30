import type { NextPage } from "next";
import { GetStaticProps } from "next";
import { getCountries } from "api";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Header from "../components/header/header";
import Card from "components/card/card";
import { Country } from "types";

interface prop {
  country: Country[]
}

export default function Home<prop>({ countries }) {

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

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { data } = await getCountries.get("/all");
  const countries: Country[] = data.map((countries: any, index: number)=>({
    ...countries,
    id: index + 1
  }))
  return {
    props: countries
  }
};

