import styles from './header.module.css'
import Image from 'next/image'
import moon from "/components/img/moon-solid.svg";
import Head from 'next/head';
import { useRouter } from 'next/router';
import Link from 'next/link';

export default function Header(){

  const router = useRouter();

  const pushHome = () => {
    router.push('/')
  }
  
  return (
    <header className={styles.header}>
      <Head>
        <title>Countries App</title>
        <meta name="description" content="Api to find all countries" />
        <link rel="icon" href="../components/img/globe.svg" />
      </Head>
      
      <section className={styles.navbar}>
        <div className={styles.left}>
         <Link href="/">
          <a className={styles.title}>Where in the word?</a>
         </Link>
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
      </section>
    </header>
  );
} 