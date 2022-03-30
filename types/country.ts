export interface Country {
  id: number,
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
  currencies?: string;
}

export interface countryResponse {

}