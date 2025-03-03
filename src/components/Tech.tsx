import React from "react";
import { motion } from "framer-motion";
import { BallCanvas } from "./canvas";
import { technologies } from "../constants";

const Tech = () => {
  return (
    <section id="skills" className="relative w-full mx-auto py-20">
      <div className="mt-20 max-w-7xl mx-auto">
        <motion.div
          variants={{
            hidden: { opacity: 0 },
            show: { opacity: 1 },
          }}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="sm:px-16 px-6"
        >
          <p className="sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider">
            My Technical Expertise
          </p>
          <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
            Skills & Technologies.
          </h2>
        </motion.div>

        <div className="mt-20 flex flex-row flex-wrap justify-center gap-10 sm:px-16 px-6">
          {technologies.map((technology) => (
            <div className="w-28 h-28" key={technology.name}>
              <BallCanvas icon={technology.icon} />
              <p className="text-center text-secondary mt-2">{technology.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tech;