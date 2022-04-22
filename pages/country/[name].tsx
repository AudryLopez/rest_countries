import { GetStaticProps, NextPage, GetStaticPaths } from "next";
import { getCountries } from "../../api";
import { Layout } from "../../components/layout";
import { SmallCountry } from "types";
import Country from "../../components/country/country"

interface Props {
  country: SmallCountry;
}

const CountryPage: NextPage<Props> = ({ country }) => {
  
  return( 
    <Layout>
      {<Country country={country} />}
    </Layout>
    );
};

// You should use getStaticPaths if you’re statically pre-rendering pages that use dynamic routes

export const getStaticPaths: GetStaticPaths = async (ctx) => {
  const pokemons151 = [...Array(8)].map((value, index) => `${index + 1}`);

  return {
    paths: pokemons151.map((id) => ({
      params: { id },
    })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { name } = params as { name: string };
  console.log(name)
  const { data } = await getCountries.get(`/name/${name}`);

  return {
    props: {
      country: data,
    },
  };
};

export default CountryPage;
