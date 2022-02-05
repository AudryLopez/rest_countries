import Image from 'next/image'
import styles from './card.module.css'
import Country from '../../types/country';

export default function Card(props: Country) {
  const { flags, name, population, region, capital }  =  props;

  return (
    <div className={styles.card}>
      <Image className={styles.imagen} src={flags} alt="flag" />
      <div className={styles.cardContainer}>
        <h4 className={styles.title}>{name}</h4>
        <h1>Population: {population}</h1>
        <h1>Region: {region}</h1>
        <h1>Capital: {capital}</h1>
      </div>
    </div>
  );
}