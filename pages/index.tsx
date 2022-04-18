import type { NextPage } from "next";
import { GetStaticProps } from "next";
import { getCountries } from "api";
import styles from "../styles/Home.module.css";
import Card from "components/card/card";
import { Layout } from '../components/layout/index';
import { SmallCountry } from "types";
interface Props {
  countries: SmallCountry[];
}

const HomePage: NextPage<Props> = ({ countries }) => {
  console.log(countries)

  return (
    <Layout>
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
            <option value="Europa">Europa</option>
            <option value="Oceania">Oceania</option>
          </select>
        </nav>
        {countries.map((country, id: number) => {
          return <Card key={id} country={country} />;
        })}
        
      </section>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { data } = await getCountries.get("/all");
  const countries: SmallCountry[] = data.map((country: SmallCountry, index: number) => ({
    ...country,
    id: index + 1,
  }));

  console.log(countries)

  return {
    props: {
      countries,
    },
  };
};

export default HomePage;
