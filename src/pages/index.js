import Layouts from "../layout/Layouts";
import Hero from "../components/home-page/Hero";
import HeroSection from "../components/home-page/HeroSection";
import BannerMarketing from "../components/home-page/BannerMarketing";
import HoselProductDisplay from "../components/home-page/HoselProductDisplay";
import Section4 from "../components/home-page/Section4";
import Section5 from "../components/home-page/Section5";
import ReviewsSection from "../components/home-page/ReviewsSection";
import Section7 from "../components/home-page/Section7";
import Section8 from "../components/home-page/Section8";
import Section9 from "../components/home-page/Section9";

export default function Home() {
  const cardVariants = {
    offscreen: {
      y: 300,
    },
    onscreen: {
      y: 0,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8,
      },
    },
  };
  return (
    <Layouts>
      <Hero />
      <HeroSection variants={cardVariants} />
      <BannerMarketing variants={cardVariants} />
      <HoselProductDisplay variants={cardVariants} />
      <Section4 variants={cardVariants} />
      <Section5 variants={cardVariants} />
      <ReviewsSection variants={cardVariants} />
      <Section7 variants={cardVariants} />
      <Section8 variants={cardVariants} />
      <Section9 variants={cardVariants} />
    </Layouts>
  );
}
