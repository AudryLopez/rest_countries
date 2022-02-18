import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Header from "../components/header/header";
import Card from "components/card/card";

const Home: NextPage = () => {


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
            <select className={styles.select}>
              <option value="volvo">Volvo</option>
              <option value="saab">Saab</option>
              <option value="fiat">Fiat</option>
              <option value="audi">Audi</option>
            </select>
          </nav>
          <Card country="Argentina" />
          <Card country="france" />
          <Card country="mexico" />
          <Card country="Germany" />
          <Card country="Kenya" />
          <Card country="yemen" />
          <Card country="Libya" />
          <Card country="Nepal" />
        </section>
      </main>
    </div>
  );
};

export default Home;
