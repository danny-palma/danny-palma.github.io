import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";

const SectionWrapper = (
  Component: () => JSX.Element,
  idName: string | undefined
) => {
  function HOC() {
    return (
      <motion.section
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
      >
        <span className="hash-span" id={idName}>
          &nbsp;
        </span>

        <Component />
      </motion.section>
    );
  }

  return HOC;
};

export default SectionWrapper;
