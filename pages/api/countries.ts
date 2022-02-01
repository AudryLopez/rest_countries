const country = async ( country: string ) => {
  const Name = process.env.API_COUNTRIES_NAME;
	console.log(Name);
  const response = await fetch(
    `https://restcountries.com/v3.1/name/${country}`
  );
	if (!response) throw Error(`this ${country} is not foound`);
  return response.json()
}

const countries = async (countries: string) => {
  const { API_COUNTRIES_ALPHA } = process.env;
  const response = await fetch(`${API_COUNTRIES_ALPHA}${countries}`);
  if (!response) throw Error(`this ${countries} is not foound`);
  return response.json();
};

export default country;