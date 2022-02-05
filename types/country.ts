interface Country {
  name: string;
  capital: string;
  region: string;
  flags: string;
  population: number;
  topLevelDomain?: string;
  nativeName?: string;
  borders?: string;
  subregion?: string;
  languages?: string;
}

export default Country;