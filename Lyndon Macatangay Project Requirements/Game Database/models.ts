export interface Game {
    background_image: string;
    name: string;
    released: string;
    metacritic_url: string;
    website: string;
    description: string;
    metacritic: number;
    genres: Array<Genre>;
    parent_platforms: Array<ParentPlatform>;
    publishers: Array<Publishers>;
    ratings: Array<Rating>;
    screenshots: Array<Screenshots>;
    trailers: Array<Trailer>;
  }
  
  export interface APIResponse<T> {
      results: Array<T>;
      slug:string; 
      
  }
  
  interface Genre {
    name: string;
    slug:string; 
  }
  
  interface ParentPlatform {
    platform: {
      name: string;
      slug:string; 
    };
  }
  
  interface Publishers {
    name: string;
    slug:string; 
  }
  
  interface Rating {
    id: number;
    count: number;
    title: string;
    slug:string; 
  }
  
  interface Screenshots {
    image: string;
    slug:string; 
    id:string;
  }
  
  interface Trailer {
    data: {
      max: string;
      slug:string; 
    };
  }
  