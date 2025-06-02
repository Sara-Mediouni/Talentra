import CallToAction from "./components/HomeSections/CallToAction";
import ExploreResources from "./components/HomeSections/ExploreResources";
import FeaturedJobs from "./components/HomeSections/FeaturedJobs";
import HeroSection from "./components/HomeSections/Hero";
import HowItWorks from "./components/HomeSections/HowItWorks";
import Newsletter from "./components/HomeSections/Newsletter";
import Testimonials from "./components/HomeSections/Testimonials";
import CareerTips from "./components/HomeSections/Tips";
import Topcategories from "./components/HomeSections/Topcategories";
import TopCompanies from "./components/HomeSections/TopCompanies";

export default function Home() {
  return (
    <>
    <HeroSection/>
    <Topcategories/>
    <HowItWorks/>
    <FeaturedJobs/>
    <TopCompanies/>
    <ExploreResources/>
    <Testimonials/>
    <CallToAction/>
    <CareerTips/>
    <Newsletter/> 
    </>
   

  );
}
