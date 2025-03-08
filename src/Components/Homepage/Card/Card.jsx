import React from 'react'
import photo from "./chair.png"
import "./Card.css"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"

const Card = () => {
  const cardRef = useRef(null)
  const isInView = useInView(cardRef, { once: true, amount: 0.3 })
  
  // Container variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  }
  
  // Image variants
  const imageVariants = {
    hidden: { 
      scale: 0.8, 
      opacity: 0,
      rotate: -5
    },
    visible: { 
      scale: 1, 
      opacity: 1, 
      rotate: 0,
      transition: { 
        type: "spring", 
        damping: 12,
        stiffness: 100
      }
    }
  }
  
  // Text variants
  const titleVariants = {
    hidden: { 
      y: -50, 
      opacity: 0 
    },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { 
        type: "spring", 
        damping: 10,
        stiffness: 100
      }
    }
  }
  
  const paragraphVariants = {
    hidden: { 
      scale: 0.9, 
      opacity: 0 
    },
    visible: { 
      scale: 1, 
      opacity: 1,
      transition: { 
        duration: 0.6
      }
    }
  }

  return (
    <div>
      <motion.div 
        className="card-whole"
        ref={cardRef}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        <motion.div 
          className="photo-card"
          variants={imageVariants}
          whileHover={{ 
            scale: 1.05,
            boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)",
            transition: { duration: 0.3 }
          }}
        >
          <img src={photo} alt='car'/>
        </motion.div>
        <div className="words-card">
          <motion.div 
            className="title-card"
            variants={titleVariants}
          >
            <h3>Relax & Let us Handle the Shine!</h3>
          </motion.div>
          <motion.div 
            className="para-card"
            variants={paragraphVariants}
          >
            <p>Relax and Unwind in Our Comfortable Customer Lounge While We Take Care of Your Car. Enjoy a peaceful space to relax with complimentary amenities as we work on getting your car sparkling clean!</p>
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}

export default Card