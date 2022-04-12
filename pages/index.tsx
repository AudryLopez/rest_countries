import type { NextPage } from "next";
import { GetStaticProps } from "next";
import { getCountries } from "api";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Header from "../components/header/header";
import Card from "components/card/card";
import { Country } from "types";
import { CountryResponse } from "types";

interface Props {
  countries: CountryResponse[];
}

const HomePage: NextPage<Props> = ({ countries }) => {
  
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
            />
            <select className={styles.select} placeholder="Find your country..">
              <option value="Africa">Africa</option>
              <option value="America">America</option>
              <option value="Asia">Asia</option>
              <option value="Europa">
                Europa
              </option>
              <option value="Oceania" >
                Oceania
              </option>
            </select>
          </nav>
          {countries.map((country, id: number)=>{
             return <Card key={id} country={country} />
          })}
        </section>
      </main>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const  { data }  = await getCountries.get<CountryResponse[]>("/all");
  
  return {
    props: {
      data,
    },
  };
};

export default HomePage;
