import { motion } from "framer-motion";
import AboutSection from "../pageContents/home/aboutSection";
import ConstructionSolutionsSection from "../pageContents/home/constructionSolutionsSection";
import IntroSection from "../pageContents/home/introSection";
import OurProducts from "../pageContents/home/OurProducts";
import OurService from "../pageContents/home/OurService";
import WhyToChooseSection from "../pageContents/home/whyToChooseSection";

const Home = () => {
  // Define the sections array with unique keys for each section
  const sections = [
    <AboutSection key="1" />,
    <WhyToChooseSection key="2" />,
    <ConstructionSolutionsSection key="3" />,
    <OurService key="4" />,
    <OurProducts key="5" />,
  ];

  return (
    <>
      <IntroSection />
      <div className="cont mx-auto py-8 md:py-16">
        {sections.map((item, index) => (
          <motion.div
            key={index} // Use the index as key for motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{
              delay: 0.3, // Uniform delay for all sections
              ease: "easeInOut",
              duration: 0.8,
            }}
          >
            {item}
            <div className="mt-16 md:mt-20"></div>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default Home;
