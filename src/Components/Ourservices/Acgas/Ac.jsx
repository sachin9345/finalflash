import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import "./Ac.css";
import image from "./Ac.svg";

const Ac = () => {
  const titleRef = useRef(null);
  const imageRef = useRef(null);
  const contentRef = useRef(null);
  const questionsRef = useRef(null);

  const titleInView = useInView(titleRef, { once: true, amount: 0.3 });
  const imageInView = useInView(imageRef, { once: true, amount: 0.3 });
  const contentInView = useInView(contentRef, { once: true, amount: 0.3 });
  const questionsInView = useInView(questionsRef, { once: true, amount: 0.3 });

  return (
    <div className="whole-gas">
      {/* Title */}
      <motion.h2
        ref={titleRef}
        className="gas-title"
        initial={{ opacity: 0, y: -20 }}
        animate={titleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
        transition={{ duration: 0.6 }}
      >
        AC Gas Filling Service
      </motion.h2>

      {/* Content Section */}
      <div className="mid-gas">
        {/* Image */}
        <motion.div
          ref={imageRef}
          className="img-gas"
          initial={{ opacity: 0, x: -50 }}
          animate={imageInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
          transition={{ duration: 0.8 }}
        >
          <img src={image} alt="Car AC Service" />
        </motion.div>

        {/* Text Content */}
        <motion.div
          ref={contentRef}
          className="img-contnt-gas"
          initial={{ opacity: 0, x: 50 }}
          animate={contentInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
          transition={{ duration: 0.8 }}
        >
          <p>
            Keep your car's air conditioning running at optimal performance with our professional AC Gas Filling service. Over time, the refrigerant gas in your car's AC system can deplete, causing it to blow warm air or fail to cool effectively. Our trained technicians will refill the AC gas, ensuring your car stays cool and comfortable.
          </p>
        </motion.div>
      </div>

      {/* Question Section */}
      <motion.div
        ref={questionsRef}
        className="ques-gas"
        initial={{ opacity: 0, y: 30 }}
        animate={questionsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.7 }}
      >
        <h3>What's Included in Our AC Gas Filling Service:</h3>
        <ul>
          {[
            "AC System Inspection: We thoroughly inspect your AC system to ensure it is functioning properly.",
            "Refrigerant Check & Refill: We check the refrigerant level and top it up if needed.",
            "Leak Check: If necessary, we'll check for leaks in the AC system.",
            "System Clean & Performance Test: Once the gas is refilled, we clean the system and test it to ensure it's working efficiently."
          ].map((item, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              animate={questionsInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              transition={{ duration: 0.5, delay: questionsInView ? index * 0.2 : 0 }}
            >
              {item}
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </div>
  );
};

export default Ac;
