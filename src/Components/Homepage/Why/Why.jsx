import React, { useState, useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import bmw from "./bmw.svg";
import "./Why.css";
import Pop from "../Pop-up/Pop";

const Why = () => {
  const imageRef = useRef(null);
  const headingRef = useRef(null);
  const paragraphRef = useRef(null);
  const containerRef = useRef(null);

  const imageInView = useInView(imageRef, { once: true, amount: 0.3 });
  const headingInView = useInView(headingRef, { once: true, amount: 0.3 });
  const paragraphInView = useInView(paragraphRef, { once: true, amount: 0.3 });
  const sectionInView = useInView(containerRef, { amount: 0.5 }); // Trigger when at least 50% visible

  const [showPop, setShowPop] = useState(false);

  useEffect(() => {
    const hasSeenPopup = sessionStorage.getItem("seenPopup");
    if (sectionInView && !hasSeenPopup) {
      setShowPop(true);
      sessionStorage.setItem("seenPopup", "true");
    }
  }, [sectionInView]);

  return (
    <div className="why-container" ref={containerRef}>
      <div className="whole-why">
        {/* Image Section */}
        <motion.div
          ref={imageRef}
          className="image-why"
          initial={{ opacity: 0, x: -50, scale: 0.9 }}
          animate={imageInView && { opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <img src={bmw} alt="bmw" />
        </motion.div>

        {/* Text Content Section */}
        <div className="right-why">
          <motion.h2
            ref={headingRef}
            className="head-why"
            initial={{ opacity: 0, y: -20 }}
            animate={headingInView && { opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            Why Flashy Finish?
          </motion.h2>

          <motion.p
            ref={paragraphRef}
            className="para-why"
            initial={{ opacity: 0, x: 50 }}
            animate={paragraphInView && { opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            At Flashy Finish, we prioritize quality and convenience. Our expert
            team uses top-notch equipment and high-quality products to give your
            car the care it deserves. While we wash your vehicle, you can relax
            in our comfortable customer lounge, equipped with complimentary
            Wi-Fi and coffee. We offer fast, efficient service without
            compromising on quality, ensuring your car is spotless in no time.
            With flexible packages tailored to fit your needs and budget, we
            provide an affordable yet premium car wash experience. Choose us for
            the perfect blend of comfort, efficiency, and care.
          </motion.p>
        </div>
      </div>

      {/* Pop-up (only once per session) */}
      {showPop && <Pop onClose={() => setShowPop(false)} />}
    </div>
  );
};

export default Why;
