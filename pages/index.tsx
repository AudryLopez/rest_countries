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
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <main className={styles.main}>
        <section className={styles.countriesContainer}>
          <Card country="Argentina" />
          <Card country="spain" />
          <Card country="mexico" />
          <Card country="Germany" />
          <Card country="Kenya" />
          <Card country="south korea" />
          <Card country="Libya" />
          <Card country="Nepal" />
        </section>
      </main>
    </div>
  );
};

export default Home;
