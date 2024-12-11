export interface ISwiper {
    id: string;
    image: string;
    title: {
      english?: string; // Optional if not always present
    };
  }
  
  
  interface title{
    english:string
    
  }
  export interface IBannerSwiper {
    slides?: ISwiper[];
    heading?: string;
  }