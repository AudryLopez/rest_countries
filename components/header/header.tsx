import styles from './header.module.css'
import Image from 'next/image'
import moon from "/components/img/moon-solid.svg";
import Head from 'next/head';

export default function Header(){
  
  return (
    <header className={styles.navbar}>
      <Head>
        <title>Countries App</title>
        <meta name="description" content="Api to find all countries" />
        <link rel="icon" href="../components/img/globe.svg" />
      </Head>
      <div className={styles.left}>
        <h1 className={styles.title}>Where in the word</h1>
      </div>
      <div className={styles.right}>
        <Image
          src={moon}
          className={styles.btnchange}
          alt="color theme button"
          width={60}
          height={35}
        />
      </div>
    </header>
  );
} 