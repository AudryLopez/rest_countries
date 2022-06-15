import { FC } from 'react';
import { useRouter } from "next/router";
import Image from 'next/image'
import styles from './card.module.css'
import { SmallCountry } from "types";



interface prop {
  country: SmallCountry;
}

export const Card: FC<prop> = ({ country }) => {
  const router = useRouter();
  
  const pushButton = () =>{
    router.push(`/country/${country.name.common.toLocaleLowerCase()}`)
  }

  return (
    <div className={styles.card} onClick={pushButton}>
      <Image
        src={country.flags.svg}
        className={styles.imagen}
        width="100%"
        height="60%"
        layout="responsive"
        alt="flag"
      />
      <section className={styles.cardContainer}>
        <h2>{country.name.common}</h2>
        <strong>
          Population: <p>{country.population}</p>
        </strong>

        <h3>Region: {country.region}</h3>
        <h3>Capital: {country.capital}</h3>
      </section>
    </div>
  );
};

export default Card;