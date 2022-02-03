import Image from "next/image"
import styles from "./country.module.css"
import Country from "../types/country";

export default function Countries(props: Country) {
  return (
    <section className={styles.main} >
      <Image src={props.flags} alt={`flag of ${props.nativeName}`} />
      <div className={styles.country} >
        <h1 className={styles.title} >{props.nativeName}</h1>
      </div>
    </section>
  );
}
