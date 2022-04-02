export interface Country {
  id: number;
  name: name;
  capital: string;
  region: string;
  flags: img;
  population: number;
  topLevelDomain?: string;
  nativeName?: string;
  borders?: string;
  subregion?: string;
  languages?: string;
  currencies?: string;
}

export interface img {
  svg: string;
  png: string;
}

export interface name {
  common: string;
  official: string;
  nativeName: nativeName;
}

export interface nativeName {
  spa: translation;
}

export interface translation {
  official: string;
  common: string;
}