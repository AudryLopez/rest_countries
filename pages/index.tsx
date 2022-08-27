import type { NextPage } from "next";
import { GetStaticProps } from "next";
import { getCountries } from "api";
import styles from "../styles/Home.module.css";
import Card from "components/card/card";
import { Layout } from '../components/layout/index';
import { country } from '../types/smallCountry';

interface Props {
  countries: country[];
}

const HomePage: NextPage<Props> = ({ countries }) => {
  
  return (
    <Layout>
      <section className={styles.countriesContainer}>
        <nav className={styles.selectContainer}>
          <input
            type="text"
            placeholder="search for a country.."
            className={styles.input}
          />
          <select className={styles.select} placeholder="Find your country..">
            <option value="Africa">Africa</option>
            <option value="America">America</option>
            <option value="Asia">Asia</option>
            <option value="Europa">Europa</option>
            <option value="Oceania">Oceania</option>
          </select>
        </nav>
        {countries.map((country, id: number) => {
          return <Card key={id} country={country} /> 
        })}
      </section>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { data } = await getCountries.get("/all");
  const countries: country[] = data.map((country: country, index: number) => ({
    ...country,
    id: index + 1,
  }));

  return {
    props: {
      countries,
    },
  };
};

export default HomePage;
