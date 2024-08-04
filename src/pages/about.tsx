import { Divider } from "@mui/material";
import { motion } from "framer-motion";
import Head from "next/head";
import DualWeightText from "../components/dualWeightText";

const fadeInLeft = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0 },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const About = () => {
  return (
    <>
      {/* SEO Enhancements */}
      <Head>
        <title>About STAR & SHINE Interlocking Bricks - Leading Manufacturer in Kerala</title>
        <meta
          name="description"
          content="Discover STAR & SHINE Interlocking Bricks, the leading manufacturer of eco-friendly and durable interlocking bricks in Kerala and Tamil Nadu. Learn about our mission and customer testimonials."
        />
        <meta
          name="keywords"
          content="Interlocking Bricks, STAR & SHINE, Kerala, Tamil Nadu, Eco-friendly, Durable Bricks, Construction bricks"
        />
        <link rel="canonical" href="https://www.yourwebsite.com/about" />
      </Head>

      <div className="relative about-background-gradient pb-20">
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="relative cont text-white">
          {/* First Section */}
          <motion.h1
            initial="hidden"
            whileInView="visible"
            viewport={{  amount: 0.1 }}
            variants={fadeInLeft}
            transition={{ duration: 0.8 }}
            className="font-nuehassMedium text-5xl md:text-8xl md:w-4/5 font-extrabold tracking-tight pt-8 mt-4 md:pt-12 mb-4 leading-tight"
          >
            We Are The Leading Interlocking Bricks Manufacturer in Kerala
          </motion.h1>
          
          <div className="xl:flex py-8 xl:space-x-7">
            <motion.div
              initial="hidden"
              animate="visible"
              whileInView="visible"
              viewport={{  amount: 0.1 }}
              variants={fadeInLeft}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="xl:w-8/12"
            >
              <p className="font-montserrat text-base md:text-xl lg:text-2xl text-gray-300 leading-relaxed mb-4 md:mt-5">
                Star & Shine Interlocking Bricks is the leading interlocking bricks supplier in Kerala. We have extended our service to all major cities of Tamil Nadu. We manufacture and supply the best quality cement interlock bricks, soil interlock bricks, and M bricks using high-quality machines. These interlock bricks are environmentally friendly and cost-effective.
              </p>

              <p className="font-montserrat text-base md:text-xl lg:text-2xl text-gray-300 leading-relaxed mb-4 ">
                At STAR & SHINE Interlocking, we have dedicated several years to research and development, aiming to provide the best interlocking bricks in the market. Our bricks are designed to withstand the test of time. With a commitment to excellence and innovation, we specialize in producing top-of-the-line interlocking bricks for all your construction needs.
              </p>

              <p className="font-montserrat text-base md:text-xl lg:text-2xl text-gray-300 leading-relaxed mb-4 ">
                Our company combines state-of-the-art technology with skilled craftsmanship to deliver bricks that offer exceptional strength, durability, and aesthetics. Whether you're working on residential, commercial, or landscaping projects, our interlocking bricks provide a cost-effective and sustainable solution.
              </p>

              <p className="font-montserrat text-base md:text-xl lg:text-2xl text-gray-300 leading-relaxed mb-16 ">
                Trust Star & Shine Interlocking Bricks to elevate your construction endeavors with our reliable products and unwavering dedication to customer satisfaction. We are the pioneers in the field of interlocking technology, with more than 25 years of experience and a mission to simplify construction through innovative technologies for a greener tomorrow.
              </p>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{  amount: 0.1 }}
              variants={fadeInUp}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="xl:w-3/5"
            >
              <img
                src="/images/house.avif"
                alt="STAR & SHINE Interlocking Bricks"
                className="mb-8 rounded-lg shadow-lg w-full"
              />
            </motion.div>
          </div>

          {/* Additional Sections */}
          <section>
            <DualWeightText
              primaryText="About"
              secondaryText="STAR&SHINE Interlocking Bricks"
              clases="!text-4xl md:!text-6xl lg:!text-7xl"
            />
            <Divider className="bg-white md:w-3/5" />
            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{  amount: 0.1 }}
              variants={fadeInLeft}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="md:w-3/5 py-6 font-montserrat text-base md:text-xl lg:text-2xl text-gray-300 leading-relaxed"
            >
              Welcome to STAR & SHINE Interlocking, where we combine innovation, durability, and aesthetics to offer the best interlocking bricks in the market. With years of dedicated research and development, our team has engineered interlocking bricks that stand the test of time, much like the ancient Indian temples and monuments that inspire us.
            </motion.p>
          </section>

          <section className="additional-content py-8">
            <DualWeightText
              primaryText="Why"
              secondaryText="Choose Our Interlocking Bricks?"
              clases="!text-4xl md:!text-6xl lg:!text-7xl"
            />
            <Divider className="bg-white md:w-3/5" />
            <motion.ul
              initial="hidden"
              whileInView="visible"
              viewport={{  amount: 0.1 }}
              variants={fadeInUp}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="list-disc ml-6 text-base md:text-xl lg:text-2xl py-6 md:w-3/5 text-gray-200 leading-relaxed"
            >
              <li className="mb-2">
                <strong className="text-yellow-400">Durability:</strong> Our interlocking bricks are engineered to last, ensuring stability and strength for all types of construction projects.
              </li>
              <li className="mb-2">
                <strong className="text-yellow-400">Eco-Friendly:</strong> Made with sustainable materials, our bricks help reduce environmental impact, promoting green building practices.
              </li>
              <li className="mb-2">
                <strong className="text-yellow-400">Cost-Effective:</strong> Enjoy savings on construction costs with our affordable and efficient brick solutions.
              </li>
              <li className="mb-2">
                <strong className="text-yellow-400">Versatility:</strong> Suitable for various applications, including residential, commercial, and industrial projects.
              </li>
            </motion.ul>
          </section>

          <section className="mission-statement">
            <DualWeightText
              primaryText="Our"
              secondaryText="Mission and Vision"
              clases="!text-4xl md:!text-6xl lg:!text-7xl"
            />
            <Divider className="bg-white md:w-3/5" />
            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{  amount: 0.1 }}
              variants={fadeInUp}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="font-montserrat text-base md:text-xl lg:text-2xl py-8 md:w-3/5 text-gray-300 leading-relaxed"
            >
              At STAR & SHINE Interlocking Bricks, our mission is to revolutionize the construction industry by offering superior interlocking brick solutions that are both innovative and sustainable. We envision a future where eco-friendly building practices become the norm, contributing to a healthier planet.
            </motion.p>
          </section>

          <section className="customer-testimonials">
            <DualWeightText
              primaryText="Customer"
              secondaryText="Testimonials"
              clases="!text-4xl md:!text-6xl lg:!text-7xl"
            />
            <Divider className="bg-white md:w-3/5" />
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{  amount: 0.1 }}
              variants={fadeInUp}
              // transition={{ duration: 0., delay: 0.5 }}
              className="md:w-3/5"
            >
              <blockquote className="italic text-base md:text-xl lg:text-2xl pt-8 text-gray-200">
                "STAR & SHINE's interlocking bricks transformed our building project. Their quality and service are unmatched!" - <strong className="text-yellow-400">Happy Customer</strong>
              </blockquote>
              <blockquote className="italic mt-4 text-base md:text-xl lg:text-2xl text-gray-200">
                "Choosing STAR & SHINE was the best decision for our eco-friendly construction. Highly recommended!" - <strong className="text-yellow-400">Satisfied Client</strong>
              </blockquote>
            </motion.div>
          </section>
        </div>
      </div>
    </>
  );
};

export default About;
