import React from 'react';
import { motion } from 'framer-motion';
import "./Dog.css";
import dog from "./dog.svg";

const Dog = () => {
  // Animation variants for the dog image only
  const dogAnimation = {
    dance: {
      y: [0, -15, 0, -15, 0],
      rotate: [0, 5, 0, -5, 0],
      transition: {
        y: {
          repeat: Infinity,
          duration: 1.5,
          ease: "easeInOut"
        },
        rotate: {
          repeat: Infinity,
          duration: 1.5,
          ease: "easeInOut"
        }
      }
    }
  };

  return (
    <div className="out-div">
      <div className="outer-dog">
        <motion.div 
          className="dog"
          variants={dogAnimation}
          animate="dance"
        >
          <img src={dog} alt="Dog" />
        </motion.div>
        <div className="dog-words">
          <p>Pet-Friendly Car Detailing  Because Your Car and Pet Deserve the Best!</p>
        </div>
      </div>
    </div>
  );
};

export default Dog;