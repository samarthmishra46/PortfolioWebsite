import React from "react";
import { motion } from "framer-motion";

import { experiences } from "../constants";

const ExperienceCard = ({ experience }: { experience: any }) => {
  return (
    <div className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full">
      <div className="relative w-full h-[230px]">
        <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
          <div
            onClick={() => window.open(experience.company_url, "_blank")}
            className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
          >
            <div className="w-1/2 h-1/2 object-contain" />
          </div>
        </div>
      </div>

      <div className="mt-5">
        <h3 className="text-white font-bold text-[24px]">{experience.title}</h3>
        <p className="mt-2 text-secondary text-[14px]">{experience.company_name}</p>
        <p className="mt-2 text-secondary text-[14px]">{experience.date}</p>
      </div>

      <ul className="mt-5 list-disc ml-5 space-y-2">
        {experience.points.map((point: string, index: number) => (
          <li
            key={`experience-point-${index}`}
            className="text-white-100 text-[14px] pl-1 tracking-wider"
          >
            {point}
          </li>
        ))}
      </ul>
    </div>
  );
};

const Experience = () => {
  return (
    <section id="work" className="relative w-full mx-auto py-20">
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
            What I have done so far
          </p>
          <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
            Work Experience.
          </h2>
        </motion.div>

        <div className="mt-20 flex flex-col">
          <div className="mb-12 flex flex-wrap gap-10 justify-center">
            {experiences.map((experience, index) => (
              <ExperienceCard
                key={`experience-${index}`}
                experience={experience}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;