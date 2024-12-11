import React, { useState } from "react";
import Wrapper from "../../shared/utils/wrapper/Wrapper";
import { IAnimeDetails } from "../../interface/anime";

import { FaCirclePlay } from "react-icons/fa6";


import BackButton from "../../components/BackButton";
import { useParams } from "react-router";
import { useAnimeDetails } from "../../Hooks/react-query";
import { IonRouterLink } from "@ionic/react";


const AnimeDetails: React.FC<IAnimeDetails> = ({

}) => {
  const [loadMore, setLoadMore] = useState(true);

  const handleLoadMore = () => {
    setLoadMore(!loadMore);
  };

  const { id } = useParams<{ id: string }>(); 
  
  const { data, isLoading, error } = useAnimeDetails(id);
 
  return (
    <Wrapper>
      <div className="anime_details_screen">
        <BackButton />
        <>
          <img
            className="w-[220px] mx-auto mt-5 rounded-2xl p-2 bg-white/70   shadow-2xl shadow-purple-100/30  "
            src={data?.image}
            alt="img"
          />
          <div className="px-5">
            <a href="/watch">
            <h1 className="mt-10 text-3xl font-bold font-sans antialiased tracking-wide leading-9 text-center">
              {data?.title}               
            </h1>
            </a>
            <p
              onClick={handleLoadMore}
              className={`${
                loadMore ? "line-clamp-4" : ""
              }  mt-5 text-white/70 text-justify  bg-black/20  `}
            >
              {data?.description}
            </p>
            <h3 className="mt-5">
              Total Episodes:{" "}
              <span className="px-6 py-2 border bg-purple-300/ ml-5     ">
                {data?.totalEpisodes}
              </span>
            </h3>
            <div className="flex items-center gap-4 mt-3">
              <h4>type</h4>
              <div className="px-2 py-1 border bg-white/20">
                {data?.type}
              </div>
            </div>
            <div className="w-100 border border-gray-700 h-[500px] overflow-auto rounded-3xl bg-black/30 mt-5">
              <h2 className="text-3xl py-4 font-bold h-18 sticky top-0 bg-black  text-center rounded-xl w-full z-10">
                Episodes
              </h2>

              {data?.episodes.map((episode) => (
                
                <div
                  key={episode.id}
                  className="w-100 h-[100px] py-2 px-4 mt-5 bg-white/20"
                >
                  <IonRouterLink routerLink={`/watch/${episode.id}`} routerDirection="forward">
                  <div className="flex gap-4">
                    <div className="relative">
                      <img
                        src={data.image}
                        width={60}
                        alt=""
                        className="rounded-xl"
                      />
                      <FaCirclePlay
                        className="absolute inset-0 m-auto text-black animate-pulse"
                        size={40}
                      />
                    </div>
                    <div>
                      <h1 className="text-xl font-semibold">{episode.title}</h1>
                      <h2 className="mt-2">Episode: {episode.number}</h2>
                    </div>
                  </div>
                  </IonRouterLink>
                </div>
              ))}
            </div>

            <h1 className="text-2xl my-4">Recommendations</h1>
          </div>
        </>
      </div>
    </Wrapper>
  );
};

export default AnimeDetails;
