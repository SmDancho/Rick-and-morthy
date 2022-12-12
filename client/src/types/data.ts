export interface Info {
  count: number;
  pages: number;
  next: string;
  prev: string | null;
}

export interface Origin {
  name: string;
  url: string;
}

export interface Location {
  name: string;
  url: string;
}

export interface Result {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: Origin;
  location: Location;
  image: string;
  episode: string[];
  url: string;
  created: Date;
}

export interface RootObject {
  info: Info;
  results: Result[];
}
export interface params {
  page: number;
  data: {
    results: Result[];
    info: Info;
  };
  
}
export interface episodeData {
  air_date: string;
  characters: Array<string>;
  created: string;
  episode: string;
  id: number;
  name: string;
  url: string;
}

export interface episodeDataRoot {
  data: () => episodeData;
  status: () => number;
  statusText:() => string;
 
}

export type seletedType = {
  selected: number;
};
