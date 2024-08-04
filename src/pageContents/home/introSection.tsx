import { motion } from "framer-motion";
import { BsArrowRight } from "react-icons/bs";

const fadeInLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0 },
};

const fadeInBottom = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const IntroSection = () => {
  return (
    <div
      className="h-screen flex flex-col justify-center items-start background-gradient w-full"
    >
      <div className="cont flex items-center flex-col md:flex-row">
        <motion.div
          className="heading-text flex-1 pt-8 text-white"
          initial="hidden"
          whileInView="visible"
          exit="hidden"
          transition={{ duration: 1.0, ease: "easeInOut" }}
          variants={fadeInLeft}
        >
          <motion.div
            className="flex"
            initial="hidden"
            whileInView="visible"
            exit="hidden"
            transition={{ duration: 1.0, ease: "easeInOut", delay: 0.2 }}
            variants={fadeInLeft}
          >
            <span className="font-nuehassMedium italic text-4xl md:text-6xl mr-3 ">&quot;</span>
            <h1 className=" text-3xl md:text-6xl font-normal mb-8">
              <span className="font-extrabold">B</span>uilding a{" "}
              <span className="font-extrabold">S</span>trong{" "}
              <span className="font-extrabold">F</span>oundation
              <span className="font-nuehassMedium italic">&quot;</span>.
            </h1>
          </motion.div>
          <motion.h4
            className=" text-5xl md:text-7xl font-thin"
            initial="hidden"
            whileInView="visible"
            exit="hidden"
            transition={{ duration: 0.8, ease: "easeInOut", delay: 0.4 }}
            variants={fadeInLeft}
          >
            Welcome to
          </motion.h4>
          <motion.h1
            className="font-nuehassMedium text-9xl md:text-9xl font-extrabold leading-[0.9]"
            initial="hidden"
            whileInView="visible"
            exit="hidden"
            transition={{ duration: 0.8, ease: "easeInOut", delay: 0.6 }}
            variants={fadeInBottom}
          >
            STAR & SHINE
          </motion.h1>
          <motion.h1
            className="font-nuehassLight text-6xl font-black"
            initial="hidden"
            whileInView="visible"
            exit="hidden"
            transition={{ duration: 0.8, ease: "easeInOut", delay: 0.8 }}
            variants={fadeInBottom}
          >
            INTERLOCKING BRICKS
          </motion.h1>
          <motion.button
            className="px-7 py-5 bg-red-400  text-3xl text-white button-gradient mt-12 flex"
            initial="hidden"
            whileInView="visible"
            exit="hidden"
            transition={{ duration: 0.8, ease: "easeInOut", delay: 1.0 }}
            variants={fadeInBottom}
          >
            <p className="my-0 mr-2.5 ">Contact Us </p>
            <BsArrowRight size={20} />
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default IntroSection;
