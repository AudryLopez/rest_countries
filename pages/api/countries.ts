export const country = async ( country: string ) => {
  const response = await fetch(
    `https://restcountries.com/v3.1/name/${country}`
  );
	if (!response) throw Error(`this ${country} is not foound`);
  return response.json()
}

export const alphaCountry = async (countries: string) => {
  const { API_COUNTRIES_ALPHA } = process.env;
  const response = await fetch(`${API_COUNTRIES_ALPHA}${countries}`);
  if (!response) throw Error(`this ${countries} is not foound`);
  return response.json();
}

export const countries = async () => {
  const response = await fetch(`https://restcountries.com/v3.1/all`);
  if (!response) throw Error(`Not Found`);
  return response.json();
}
