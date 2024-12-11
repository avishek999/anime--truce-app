
/* ================================================== Anime  List Start ================================= */ 
export interface ITopAiringAnime {
  id: string,
  title: string,
  image: string,
  sub: number,
}
/* ================================================== Anime  List end ================================= */ 


/* ================================================== Anime  info start ================================= */ 
export interface IAnimeDetails {
    id: string;
    title: IAnimeTitle
    image: string;
    description: string;
    totalEpisodes:number;
    type: string;
    recommendations: IAnimeRecommendation[];
    episodes: episodes[]
  }  
  
  interface IAnimeTitle {
    english:string
  }
 interface IAnimeRecommendation {
    id: string;
    title: string;
    image: string;
    duration: string;
    type: string;
    sub: number;
    dub: number;
    episodes: number;
  }  
  

interface episodes {
    id: string,
    number: number,
    title: string,
    isFiller:boolean
}    


/* ================================================== Anime  info end ================================= */ 



