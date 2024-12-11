import React from "react";
import Wrapper from "../../shared/utils/wrapper/Wrapper";
import TabBar from "../../components/TabBar";
import FeatureBannerSwiper from "../../components/feature-banner-swiper/FeatureBannerSwiper";
import UpcomingEpisode from "../../components/UpcomingEpisode";
import FeatureTitanBanner from "../../components/FeatureTitanBanner";
import SliderSwiper from "../../components/slider-swiper/SliderSwiper";
import FeatureTitan2Banner from "../../components/FeatureTitan2Banner";

const animeSlides = [
  {
    id: "1",
    image:
      "https://cdn.noitatnemucod.net/thumbnail/300x400/100/9b25eb117ecc8cf228d361540c7cfd67.jpg",
    title: "Naruto: Believe It!",
  },
  {
    id: "2",
    image:
      "https://cdn.noitatnemucod.net/thumbnail/300x400/100/302680640bbf0da66bd5c779efa498ef.jpg",
    title: "One Piece: The Pirate's Journey",
  },
  {
    id: "3",
    image:
      "https://cdn.noitatnemucod.net/thumbnail/300x400/100/cebe9badca272a139feb6b70f6d4c147.jpg",
    title: "Attack on Titan: Humanity's Struggle",
  },
  {
    id: "4",
    image:
      "https://cdn.noitatnemucod.net/thumbnail/300x400/100/9b25eb117ecc8cf228d361540c7cfd67.jpg",
    title: "Demon Slayer: Kimetsu no Yaiba",
  },
  {
    id: "5",
    image:
      "https://cdn.noitatnemucod.net/thumbnail/300x400/100/92701d4864595e6cd3ce3c4effa2c198.jpg",
    title: "My Hero Academia: Heroes Rising",
  },
];

const Features = () => {
  return (
    <Wrapper>
      
      <h1 className="text-4xl font-sans-sarif mt-10 font-bold text-center">
        Released <span className="text-purple-100/40">Today</span>
      </h1>
      {/* <FeatureBannerSwiper slides={animeSlides} /> */}
      <UpcomingEpisode />
      <FeatureTitanBanner />
      {/* <SliderSwiper slides={animeSlides} heading="Recent Episode" /> */}
      {/* <SliderSwiper slides={animeSlides} heading="Most Popular" /> */}
      {/* <SliderSwiper slides={animeSlides} heading="Latest completed" /> */}
      <FeatureTitan2Banner />
      <TabBar />
    </Wrapper>
  );
};

export default Features;
