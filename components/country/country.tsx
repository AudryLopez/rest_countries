import Image from "next/image"
import styles from "./country.module.css"
import Country from "../types/country"

export default function Countries(props: Country) {
	
	return (
    <section className={styles.main}>
      <Image src={props.flags} alt={`flag of ${props.nativeName}`} />
      <div className={styles.country}>
        <h1 className={styles.title}>{props.nativeName}</h1>
        <article>
          <h1 className={styles.title}>Native Name:</h1>
          <h1 className={styles.title}>Population:</h1>
          <h1 className={styles.title}>Region:</h1>
          <h1 className={styles.title}>Sub Region:</h1>
          <h1 className={styles.title}>Capital:</h1>
          <h1 className={styles.title}>Top Level Domain:</h1>
          <h1 className={styles.title}>Currencies:</h1>
          <h1 className={styles.title}>Languages:</h1>
        </article>
        <h1 className={styles.title}>Border Contries:</h1>
      </div>
    </section>
  );
}
