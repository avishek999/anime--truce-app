import {
    IonContent,
    IonHeader,
    IonPage,
    IonRouterLink,
    IonTitle,
    IonToolbar,
  } from "@ionic/react";
  import React from "react";
  import { Swiper, SwiperSlide } from "swiper/react";
  import { IBannerSwiper } from "../../interface/swiper";
  
  // Import Swiper styles
  import "swiper/css";
  import "swiper/css/effect-cards";

  import "./FeatureBannerSwiper.scss";

  import { EffectCards } from "swiper/modules";

  
  // import required modules
  const FeatureBannerSwiper: React.FC<IBannerSwiper> = ({ slides }) => {
    return (
      <div className="SwiperCard2">
        <Swiper
          effect={"cards"}
          grabCursor={true}
          modules={[EffectCards]} 
          className="mySwiper mt-10"
        >
          {slides?.map((slide, index) => (
            <>
              <SwiperSlide key={index} className="relative">
              <IonRouterLink
                routerLink={`/anime/${slide.id}`}
                routerDirection="forward"
              >
                <img
                  width="100%"
                  height="auto"
                  className="bg-cover rounded-xl"
                  src={slide.image}
                  alt=""
                />
                <h1 className="sliderText absolute bottom-0 text-[18px] px-6 py-5 text-white">
                  {slide.title.english}
                </h1>
                </IonRouterLink>
              </SwiperSlide>  
            </>
          ))}
        </Swiper>
      </div>
    );
  };
  
  export default FeatureBannerSwiper;
  