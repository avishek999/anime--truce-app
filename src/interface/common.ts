export const ERROR_MESSAGES = {
  INVALID_CREDENTIALS: "Invalid email or password.",
  NETWORK_ERROR: "Network error occurred. Please try again later.",
  UNEXPECTED_ERROR: "An unexpected error occurred. Please try again.",
};
export interface IApiResponse<IData> {
  id:string,
  image:string,
  title:string,
  description:string,
  totalEpisodes:number,
  type:string,
  episodes:IEpisode[],
  message: string;
  data: [IData];
  results: [];
  sources:any
}



 interface IEpisode<> {
  id:string,
  title:string,
 number:number,

}
