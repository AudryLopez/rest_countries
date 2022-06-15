import { GetStaticProps, NextPage, GetStaticPaths } from "next";
import Image from "next/image"
import { getCountries } from "../../api";
import { Layout } from "../../components/layout";
import { country } from "types";
import Country from "../../components/country/country"
import styles from "../../components/country/country.module.css"
import Countries from '../../components/country/country';
import { KeyObject } from "crypto";
import { nativeName } from '../../types/country';
import { Flags } from '../../types/smallCountry';
interface Props {
  country: country;
}

const CountryPage: NextPage<Props> = ({ country }) => {

  const { id, name, topLevelDomain, capital, subregion, region, latlng, population, borders, nativeName, flags, currencies, languages } = country
  console.log(nativeName)
  // if(country) {
  //   for (const [key, value] of Object.entries(country.map((data) => { return data.languages }))) {
  //     for (const [key, values] of Object.entries(value)) {
  //       console.log(values)
  //       language.push(values)
  //     }
  //  }
  // }

  return( 
    <Layout>
      <section key={id}  className={styles.main}>

        <span className={styles.Img}>
          <Image
           className={styles.Image}
           src={flags.svg}
           alt={`flag of ${name.common}`}
           width="800px"
           height="800px"
           objectFit="cover"
           /> 
         </span>
         <div className={styles.country}>
           <h2 className={styles.title}>{name.common}</h2>
           <article>
             <h3 className={styles.title}>Native Name:  {nativeName}</h3>
             <p className={styles.title}><strong>Population:</strong> {population.toLocaleString()}</p>
             {/* <h3 className={styles.title}>Region:   {data.region}</h3> */}
             <h3 className={styles.title}>Sub Region: {subregion}</h3>
             <h3 className={styles.title}>Capital: {capital}</h3>
             <h3 className={styles.title}>
             </h3>  
             <h3 className={styles.title}>Currencies: {console.log(currencies)}</h3>
             {/* <h3 className={styles.title}>Languages:{ console.log(language) }</h3> */}
           </article>
           <h3 className={styles.title}>Border Contries: {borders}</h3>
         </div>
       </section>
    </Layout>
    );
};

// You should use getStaticPaths if you’re statically pre-rendering pages that use dynamic routes

export const getStaticPaths: GetStaticPaths = async (ctx) => {

  const { data } = await getCountries.get("/all");

  const paths = data.map((country: any) => ({
    params: { name: country.name.common.toLowerCase() },
  }));

  return {
    paths: paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { name } = params as { name: string };
  const { data } = await getCountries.get(`/name/${name}`);

 const country = data[0];

  return {
    props: {
      country,
    },
  };
};

export default CountryPage;
