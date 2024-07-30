import AboutSection from "../pageContents/home/aboutSection";
import ConstructionSolutionsSection from "../pageContents/home/constructionSolutionsSection";
import IntroSection from "../pageContents/home/introSection";
import OurProducts from "../pageContents/home/OurProducts";
import OurService from "../pageContents/home/OurService";
import WhyToChooseSection from "../pageContents/home/whyToChooseSection";
const home = () => {
  return (
    <>
      <IntroSection />
      <div className="cont mx-auto py-8 md:py-16">
        <AboutSection />
        <div className="mt-16 md:mt-20"></div>
        <WhyToChooseSection />
        <div className="mt-16 md:mt-20"></div>
        <ConstructionSolutionsSection />
        <div className="mt-16 md:mt-20"></div>
        <OurService />
        <div className="mt-16 md:mt-20"></div>
        <OurProducts />
      </div>


    </>

  )
}

export default home