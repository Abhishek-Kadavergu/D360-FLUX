import { motion } from "framer-motion";

import SectionSvg from "../assets/svg/SectionSvg";

const Section = ({
  className,
  id,
  crosses,
  crossesOffset,
  customPaddings,
  children,
}) => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{
        duration: 1.5,
      }}
      viewport={{
        once: true,
      }}
      id={id}
      className={`relative ${
        customPaddings ||
        `py-8 md:py-12 lg:py-14 xl:py-16 ${crosses && "lg:py-24 xl:py-28"}`
      } ${className || ""}`}
    >
      {children}

      <div
        className="hidden absolute top-0 left-5 w-0.25 h-full bg-stroke-1 pointer-events-none md:block lg:left-7.5 xl:left-10"
        aria-hidden
      />
      <div
        className="hidden absolute top-0 left-5 w-0.25 h-full bg-stroke-1 pointer-events-none md:block lg:right-7.5 xl:right-10"
        aria-hidden
      />

      {crosses && (
        <>
          <div
            className={`hidden absolute top-0 left-7.5 right-7.5 h-0.25 bg-stroke-1 ${
              crossesOffset || ""
            } pointer-events-none lg:block xl:left-10 right-10`}
            aria-hidden
          />

          <SectionSvg crossesOffset={`${crossesOffset || ""}`} />
        </>
      )}
    </motion.section>
  );
};

export default Section;
