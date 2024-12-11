import "./Home.scss";
import Wrapper from "../../shared/utils/wrapper/Wrapper";
import TabBar from "../../components/TabBar";
import BannerSwiper from "../../components/Banner-swiper/BannerSwiper";
import SliderSwiper from "../../components/slider-swiper/SliderSwiper";
import { HomeQuoteBanner } from "../../components/home-quote-banner/HomeQuoteBanner";
import CategoryButton from "../../components/CategoryButton";
import AllAnimeList from "../../components/AllAnimeList";
import HomeBottomBanner from "../../components/HomeBottomBanner";
import { useRecentAnime, useTopAiringAnime } from "../../Hooks/react-query";


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

const Home: React.FC = () => {
  const {
    data: topAiringAnimeData,
    isLoading: isLoadingTopAiring,
    isError: isErrorTopAiring,
    error: topAiringError,
  } = useTopAiringAnime();
  
  const {
    data: recentAnimeData,
    isLoading: isLoadingRecent,
    isError: isErrorRecent,
    error: recentAnimeError,
  } = useRecentAnime();
  




  return (
    <Wrapper >
   
      {/* <BannerSwiper slides={topAiringAnimeData || []}/> */}
      <BannerSwiper slides={topAiringAnimeData?.results || []} />
      <SliderSwiper slides={recentAnimeData?.results || []} heading="Recent Episode" />
      <HomeQuoteBanner /> 
      <CategoryButton />
      <AllAnimeList url="www.google.com" />
      <HomeBottomBanner />
      <TabBar />
     
    </Wrapper>
  );
};

export default Home;
