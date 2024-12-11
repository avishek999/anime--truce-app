import axios, { AxiosResponse } from "axios";
import { ANIME_URL, SERVER_URL } from "../service/config";
import {  ILoginPayload, ILoginResponse, ILoginResult } from "../interface/auth";
import {  IAnimeDetails, ITopAiringAnime } from "../interface/anime";
import { ERROR_MESSAGES, IApiResponse } from "../interface/common";



//  ======================================= AUTHORIZATION START  ============================================
 
export const IsLogin = async (payload:ILoginPayload ): Promise<ILoginResult> => {
  try {
    const response: AxiosResponse<ILoginResponse>=
    await axios.post(`${SERVER_URL}/user/login`,payload);

    if(response.status === 201){
      return{
        success:true,
        data: response.data,
      };
    }

    return{
      success:false,
      error: `Unexpected response status: ${response.status} `,
    }
  } 
  catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      if (error.response) {
        // Server returned an error
        return {
          success: false,
          error: error.response.data.message || ERROR_MESSAGES.INVALID_CREDENTIALS,
        };
      } else if (error.request) {
        // No response received
        return {
          success: false,
          error: ERROR_MESSAGES.NETWORK_ERROR,
        };
      }
    }
  }

return{
  success:false,
   error: ERROR_MESSAGES.UNEXPECTED_ERROR,
}
}

// Register APi
export const registerUser = async (
  email: string,
  password: string,
  confirmPassword: string
) => {
  try {
    const response = await axios.post(`${SERVER_URL}/user/register`, {
      email,
      password,
      confirmPassword,
    });
    console.log(response);

    return response.data;
  } catch (error: any) {
    throw error.response?.data?.message || "Something went wrong!";
  }
};


//  ======================================= AUTHORIZATION END  ============================================



//  ======================================= ANIME API START  ============================================



export const getTopAiringAnimeData = async():Promise<IApiResponse<ITopAiringAnime>> =>{
try {
  const response = await axios.get(`${ANIME_URL}/trending`);
  return response.data;
} catch (error) {
     console.log(error,ERROR_MESSAGES.UNEXPECTED_ERROR);
     throw new Error(ERROR_MESSAGES.UNEXPECTED_ERROR);
}

}
export const getRecentAnimeData = async():Promise<IApiResponse<ITopAiringAnime>> =>{
  try {
    const response = await axios.get(`${ANIME_URL}/recent-episodes`);
    return response.data;
  } catch (error) {
       console.log(error,ERROR_MESSAGES.UNEXPECTED_ERROR);
       throw new Error(ERROR_MESSAGES.UNEXPECTED_ERROR);
  }
  }

  export const getAnimeDetails = async(id:string):Promise<IApiResponse<IAnimeDetails>> =>{
    try {
      const response = await axios.get(`${ANIME_URL}/info/${id}`);
      return response.data;
    } catch (error) {
         console.log(error,ERROR_MESSAGES.UNEXPECTED_ERROR);
         throw new Error(ERROR_MESSAGES.UNEXPECTED_ERROR);
    }
    }

    export const getAnimeWatchDetails = async(id:string):Promise<IApiResponse<IAnimeDetails>> =>{
      try {
        const response = await axios.get(`${ANIME_URL}/watch/${id}`);
        return response.data;
        console.log(response.data);
        
      } catch (error) {
           console.log(error,ERROR_MESSAGES.UNEXPECTED_ERROR);
           throw new Error(ERROR_MESSAGES.UNEXPECTED_ERROR);
      }
      }

//  ======================================= ANIME API END  ============================================
