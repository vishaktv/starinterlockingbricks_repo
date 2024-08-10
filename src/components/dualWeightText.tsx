import classNames from "classnames";
import { motion } from "framer-motion";

interface DualWeightTextProps {
    primaryText: string,
    secondaryText: string;
    clases?:string
}


const DualWeightText = (props: DualWeightTextProps) => {
    const fadeInLeft = {
        hidden: { opacity: 0, x: -100 },
        visible: { opacity: 1, x: 0 },
      };
      
      const fadeInUp = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
      };
    return (
        <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{  amount: 0.1 }}
        variants={fadeInUp}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
            <h3 className={classNames([props.clases,"font-nuehassMedium font-black text-6xl md:text-8xl tracking-[-0.09rem]"])}>{props.primaryText}<span className="font-nuehassLight font-thin">{props.secondaryText}</span></h3>
        </motion.div>




    )
}

export default DualWeightText