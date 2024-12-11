//core
import { IonRouterLink } from "@ionic/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

//Icons
import { FaStar } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { PiAndroidLogoDuotone } from "react-icons/pi";
import { FaUserCircle } from "react-icons/fa";
//styling
import "swiper/css";
import "swiper/css/pagination";
import "./BannerSwiper.scss";
//interface
import { IBannerSwiper } from "../../interface/swiper";

const BannerSwiper: React.FC<IBannerSwiper> = ({ slides }) => {


  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        navigation={false}
        modules={[Autoplay, Pagination]}
        className="home_banner_swiper"
      >
        <PiAndroidLogoDuotone
          className="z-50 absolute top-4 left-5 "
          color="orange
      "
          size={30}
        />
        <FaSearch
          className="z-50 absolute top-4 right-14 "
          color="#fff"
          size={30}
        />
        <FaUserCircle
          className="z-50 absolute top-4 right-4 "
          color="#fff"
          size={30}
        />

        <div className="banner_container">
          {slides?.map((slide) => (
            <SwiperSlide key={slide.id} className="Banner">
              <IonRouterLink routerLink={`/anime/${slide.id}`} routerDirection="forward">
                <img
                  className="Banner_Img"
                  src={slide.image}
                  alt="Loading Your fav anime"
                  loading="lazy"
                />
                <p className="Banner_Heading z-10">Top Airing</p>
                <h4 className="Banner_Title">{slide.title.english}</h4>
                <div className="text-yellow-500 flex items-center gap-2 absolute bottom-[20px] text-sm left-[12px] z-10">
                  <FaStar className="text-yellow-400 z-30" />
                  2.5k
                </div>
              </IonRouterLink>
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
    </>
  );
};

export default BannerSwiper;
