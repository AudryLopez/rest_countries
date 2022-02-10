import Image from "next/image"
import styles from "../../styles/globals.module.css"
import Country from "../../types/country"

export default function Countries(props: any) {

  return (
    <section className={styles.main}>
      <Image src={props.flags} alt={`flag of ${props.name}`} />
      <div className={styles.country}>
        <h1 className={styles.title}>{props.name}</h1>
        <article>
          <h1 className={styles.title}>Native Name: {props.nativeName}]</h1>
          <h1 className={styles.title}>Population: {props.population}</h1>
          <h1 className={styles.title}>Region: {props.region}</h1>
          <h1 className={styles.title}>Sub Region: {props.subregion}</h1>
          <h1 className={styles.title}>Capital: {props.capital}</h1>
          <h1 className={styles.title}>Top Level Domain: {props.topLevelDomain}</h1>
          <h1 className={styles.title}>Currencies: {props.currencies}</h1>
          <h1 className={styles.title}>Languages: {props.languages}</h1>
        </article>
        <h1 className={styles.title}>Border Contries: {props.borders}</h1>
      </div>
    </section>
  );
}
