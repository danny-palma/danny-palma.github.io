import React from "react";
import { motion } from "framer-motion";

const SectionWrapper = (
  Component: () => JSX.Element,
  idName: string | undefined
) => {
  function HOC() {
    return (
      <motion.section
        initial="hidden"
        whileInView="show"
        className="sm:px-16 px-6 py-20
        max-w-7xl mx-auto relative min-h-screen flex 
        flex-col justify-center z-0"
        id={idName}
      >
        <Component />
      </motion.section>
    );
  }

  return HOC;
};

export default SectionWrapper;
