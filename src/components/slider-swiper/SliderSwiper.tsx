import { IonRouterLink } from "@ionic/react";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { IBannerSwiper } from "../../interface/swiper";

import "./SliderSwiper.scss";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper/modules";

const SliderSwiper: React.FC<IBannerSwiper> = ({ slides , heading }) => {
  return (
    <>
        <h1 className="mt-4 text-2xl font-bold ml-2 flex items-center gap-2 text-[var(--primary-heading-text)]">
       {heading}
        <img
          width={35}
          src="https://cdn3d.iconscout.com/3d/premium/thumb/new-3d-icon-download-in-png-blend-fbx-gltf-file-formats--logo-sticker-discount-sale-sales-pack-icons-6240934.png?f=webp"
          alt=""
        />
      </h1>
      <Swiper
        slidesPerView={4}
        spaceBetween={10}
        modules={[Pagination, Navigation]}
        className="SwiperCardContainer"
      >
        {slides?.map((slide) => (
          <SwiperSlide key={slide.id} className="SwiperCard p-4  ">
            <IonRouterLink
              routerLink={`/anime/${slide.id}`}
              routerDirection="forward"
            >
              <img
                className="SwiperCardImg "
                src={slide.image}
                alt="Episode Loading.."
                loading="lazy"
              />
              <p className="SwiperCardTitle">{slide.title.english}</p>
            </IonRouterLink>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default SliderSwiper;
