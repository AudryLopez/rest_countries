import { FC } from 'react';
import { useRouter } from "next/router";
import Image from 'next/image'
import styles from './card.module.css'
import { country } from "types";



interface prop {
  country: country;
}

export const Card: FC<prop> = ({ country }) => {
  const router = useRouter();
  
  const pushButton = () =>{
    router.push(`/country/${country.name.toLocaleLowerCase()}`)
  }

  return (
    <div className={styles.card} onClick={pushButton}>
      <Image
        src={country.flags.png}
        className={styles.imagen}
        width="100%"
        height="50%"
        layout="responsive"
        alt={`Flag of ${country.name}`}
      />
      <section className={styles.cardContainer}>
        <h2>{country.name}</h2>
        <span className={styles.detail}>
          <h3>
            <strong>Population:</strong> {country.population.toLocaleString()}
          </h3>
          <h3><strong>Region:</strong> {country.region}</h3>
          <h3><strong>Capital:</strong> {country.capital}</h3>
        </span>
      </section>
    </div>
  );
};

export default Card;