import { GetStaticProps, NextPage, GetStaticPaths } from "next";
import { useRouter } from 'next/router';
import Image from "next/image"
import { Layout } from "../../components/layout";
import { getCountries } from "../../api";
import { country } from 'types';
import styles from "../../components/country/country.module.css"
interface Props {
  country: country;
}

const CountryPage: NextPage<Props> = ({ country }) => {
  const { id, name, topLevelDomain, capital, subregion, region, latlng, population, borders, nativeName, flags, currencies, languages } = country
  let currency = []
  let language = []
  let boder = []

  const router = useRouter();

  const pushBack = () => {
    router.push('/')
  }

  if (country) {
    for (const x in currencies || []) {        
        currency.push(currencies[x].name)
    }    
    for (const x in country.languages || []) {        
        language.push(country.languages[x])
    }
    for (const x in country.borders || []) {        
        boder.push(country.borders[x])
    }
  }

  return( 
    <Layout>
      <section className={styles.main}>
        <nav className={styles.buttonContainer}>
          <button onClick={pushBack}>Back</button>
        </nav>
        <div className={styles.detail}> 
          <span>
            <Image
             className={styles.Image}
             src={flags.svg}
             alt={`flag of ${name}`}
             width="100%"
             height="100%"
             layout="responsive"
             objectFit="fill"
             /> 
           </span>
           <div className={styles.country}>
             <h2 className={styles.title}>{name}</h2>
             <article className={styles.container}>
               <h3 className={styles.subTitle}><strong>Native Name:</strong>  {nativeName}</h3>
               <p className={styles.subTitle}><strong>Population:</strong> {population.toLocaleString()}</p>
               <h3 className={styles.subTitle}><strong>Region:</strong>   {region}</h3>
               <h3 className={styles.subTitle}><strong>Sub Region:</strong> {subregion}</h3>
               <h3 className={styles.subTitle}><strong>Capital:</strong> {capital}</h3>
               <h3 className={styles.subTitle}><strong>Top Level Domain: </strong>{topLevelDomain}</h3>  
               <h3 className={styles.subTitle}><strong>Currencies: </strong> { currency ? currency.map(names => names).join(" "): "Currency" }</h3>
                <h3 className={styles.subTitle}><strong>Languages: </strong>{ language ? language.map(names => names.name).join(" "): "No Languages" } </h3>
             </article>
             <h3 className={styles.subTitle}><strong>Border Contries:</strong> { boder? boder.map((names) => {return(<><label key={names}>{names}</label>,</>)}): "No borders" }</h3>
           </div>
         </div>
      </section>
    </Layout>
    );
};

// You should use getStaticPaths if you’re statically pre-rendering pages that use dynamic routes

export const getStaticPaths: GetStaticPaths = async (ctx) => {

  const { data } = await getCountries.get("/all");

  const paths = data.map((country: any) => ({
    params: { name: country.name.toLowerCase() },
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
