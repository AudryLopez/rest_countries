import { GetStaticProps, NextPage, GetStaticPaths } from "next";
import { getCountries } from "../../api";
import { Layout } from "../../components/layout";
import { SmallCountry } from "types";
import Country from "../../components/country/country"

interface Props {
  country: SmallCountry[];
}

const CountryPage: NextPage<Props> = ({ country }) => {
  
  return( 
    <Layout>
      {country.map( (country, index) => { return <Country key={index} country={country} /> })}
    </Layout>
    );
};

// You should use getStaticPaths if you’re statically pre-rendering pages that use dynamic routes

export const getStaticPaths: GetStaticPaths = async (ctx) => {
  const { data } = await getCountries.get<SmallCountry[]>("/all");
  
  const paths = data.map((country: SmallCountry) => ({
    params: { name: country.name.common },
  }));

  return {
    paths: paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { name } = params as { name: string };
  const { data } = await getCountries.get(`/name/${name}`);
  const country: SmallCountry = data.map(
    (country: SmallCountry) => ({
      ...country,
    })
  );



  return {
    props: {
      country,
    },
  };
};

export default CountryPage;
