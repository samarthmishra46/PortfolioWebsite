import React from "react";
import { motion } from "framer-motion";

import { services } from "../constants";

const ServiceCard = ({ index, title, icon, description }: { index: number, title: string, icon: React.ReactNode, description: string }) => (
  <motion.div
    variants={{
      hidden: { opacity: 0, y: 50 },
      show: { opacity: 1, y: 0 },
    }}
    className="xs:w-[250px] w-full card-gradient p-[1px] rounded-[20px] shadow-card"
  >
    <div
      className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
    >
      <div className="text-[#915EFF]">
        {icon}
      </div>

      <h3 className="text-white text-[20px] font-bold text-center">
        {title}
      </h3>
      <p className="text-secondary text-[14px] text-center">
        {description}
      </p>
    </div>
  </motion.div>
);

const About = () => {
  return (
    <section id="about" className="relative w-full mx-auto py-20">
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
          <p className="sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider">Introduction</p>
          <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">Overview.</h2>
        </motion.div>

        <motion.p
          variants={{
            hidden: { opacity: 0 },
            show: { opacity: 1 },
          }}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px] sm:px-16 px-6"
        >
          I'm a skilled professional with expertise in DevOps, full-stack development, and data science. 
          My experience spans across implementing CI/CD pipelines, containerization, cloud infrastructure, 
          building responsive web applications with the MERN stack, and developing machine learning models 
          for data analysis. I'm a quick learner and collaborate closely with clients to create efficient, 
          scalable, and user-friendly solutions that solve real-world problems.
        </motion.p>

        <div className="mt-20 flex flex-wrap gap-10 justify-center sm:px-16 px-6">
          {services.map((service, index) => (
            <ServiceCard key={service.title} index={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;