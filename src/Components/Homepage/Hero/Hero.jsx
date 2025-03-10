import React from 'react';
import { motion } from 'framer-motion';
import "./Hero.css";

const Hero = () => {
  return (
    <div className='Whole-hero'>
      <div className="whole-inside">
        <div className="top-hero">
          <div className="head-hero">
            <h1>FLASHY FINISH<span className="ltd"> Ltd</span></h1>
          </div>
        </div>
        
        <motion.div 
          className="middle-heros"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ 
            duration: 0.7,
            delay: 0.2,
            ease: "easeOut"
          }}
        >
          <p>A Car Detailing Company</p>
        </motion.div>
        <motion.div 
          className="middle-hero"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ 
            duration: 0.7,
            delay: 0.2,
            ease: "easeOut"
          }}
        >
          <p>From Dull to Dazzling – Flashy Finish Delivers!</p>
        </motion.div>
        
        <motion.div 
          className="bottom-hero"
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ 
            duration: 0.9,
            delay: 0.4,
            ease: "easeOut"
          }}
        >
          <p>
            We are a reputable automobile detailing company in Cardiff that specializes in exterior washing, waxing, polishing, and Teflon coatings; deep cleaning leather seats and fabrics inside; roof cleaning; car deodorizing; filling up air conditioners; and tire shine.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;