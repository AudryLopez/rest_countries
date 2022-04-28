import Image from "next/image"
import styles from "./country.module.css"
import { FC } from "react";
import { SmallCountry } from "types";
interface prop {
  country: SmallCountry;
}

const  Countries: FC<prop> = ({ country }) => {

  console.log(country)

    return (
      <section className={styles.main}>
        <Image
          src={country.flags.svg || country.flags.png}
          alt={`flag of ${country.name.common}`}
          width={100}
          height={90}
        />
        <div className={styles.country}>
          <h2 className={styles.title}>{country.name.common}</h2>
          <article>
            <h3 className={styles.title}>Native Name: {country.nativeName}</h3>
            <h3 className={styles.title}>Population: {country.population}</h3>
            <h3 className={styles.title}>Region: {country.region}</h3>
            <h3 className={styles.title}>Sub Region: {country.subregion}</h3>
            <h3 className={styles.title}>Capital: {country.capital}</h3>
            <h3 className={styles.title}>
              Top Level Domain: {country.topLevelDomain}
            </h3>
            <h3 className={styles.title}>Currencies: {country.currencies}</h3>
            <h3 className={styles.title}>Languages: {country.languages}</h3>
          </article>
          <h3 className={styles.title}>Border Contries: {country.borders}</h3>
        </div>
      </section>
    );
}

export default Countries;
