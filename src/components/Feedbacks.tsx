import React from "react";
import { motion } from "framer-motion";

import { testimonials } from "../constants";

const FeedbackCard = ({
  index,
  testimonial,
  name,
  designation,
  company,
  image,
}: {
  index: number;
  testimonial: string;
  name: string;
  designation: string;
  company: string;
  image: string;
}) => (
  <motion.div
    variants={{
      hidden: { opacity: 0, y: 50 },
      show: { opacity: 1, y: 0 },
    }}
    className="bg-tertiary p-10 rounded-3xl xs:w-[320px] w-full"
  >
    <p className="text-white font-black text-[48px]">"</p>

    <div className="mt-1">
      <p className="text-white tracking-wider text-[18px]">{testimonial}</p>

      <div className="mt-7 flex justify-between items-center gap-1">
        <div className="flex-1 flex flex-col">
          <p className="text-white font-medium text-[16px]">
            <span className="blue-text-gradient">@</span> {name}
          </p>
          <p className="mt-1 text-secondary text-[12px]">
            {designation} of {company}
          </p>
        </div>

        <img
          src={image}
          alt={`feedback_by-${name}`}
          className="w-10 h-10 rounded-full object-cover"
        />
      </div>
    </div>
  </motion.div>
);

const Feedbacks = () => {
  return (
    <div className="mt-12 bg-tertiary rounded-[20px]">
      <div className="max-w-7xl mx-auto sm:px-16 px-6 py-10 min-h-[300px]">
        <motion.div
          variants={{
            hidden: { opacity: 0 },
            show: { opacity: 1 },
          }}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
        >
          <p className="sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider">
            What others say
          </p>
          <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
            Testimonials.
          </h2>
        </motion.div>
      </div>
      <div className="max-w-7xl mx-auto sm:px-16 px-6 pb-14 flex flex-wrap gap-7 justify-center">
        {testimonials.map((testimonial, index) => (
          <FeedbackCard key={testimonial.name} index={index} {...testimonial} />
        ))}
      </div>
    </div>
  );
};

export default Feedbacks;