export interface Covid {
  provinceState?: string;
  countryRegion: string;
  lastUpdate: number;
  lat: number;
  long: number;
  confirmed: number;
  recovered: number;
  deaths: number;
  active: number;
  admin2?: string;
  fips?: string;
  combinedKey: string;
  incidentRate?: any;
  peopleTested?: any;
  iso2?: string;
  iso3?: string;
}
