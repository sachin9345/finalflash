"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import rotate1 from "./pic1.svg";
import rotate2 from "./pic2.svg";
import rotate3 from "./pic4.svg";
import rotate4 from "./intt.jpg";
import glass from "./glass.png"
import "./Service.css";

export default function Service() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.querySelector(".whole-service");
      if (section) {
        const rect = section.getBoundingClientRect();
        setIsVisible(rect.top < window.innerHeight && rect.bottom > 0);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Run on mount in case already in view

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const services = [
    {
      title: "HandWash & Rinse",
      description:
        "A gentle but thorough wash using pH-balanced shampoo to remove dirt and grime without harming the paint.",
      image: rotate1,
    },
    {
      title: "SnowFoam & Pre-wash",
      description:
        "A pre-wash treatment that lifts dirt from the surface to minimize scratches during washing.",
      image: rotate2,
    },
    {
      title: "Wheel & Tyre Cleaning",
      description: "Deep cleaning of wheels and tyres to remove brake dust and road grime.",
      image: rotate3,
    },
    {
      title: "Interior Vacuum & Dusting",
      description:
        "Complete vacuuming of carpets, seats, and mats, along with dashboard and console dusting.",
      image: rotate4,
    },
    {
      title: "Glass Cleaning",
      description: "Streak-free cleaning for crystal-clear visibility.",
      image: glass,
    },
  ];

  return (
    <div className="whole-service">
      <div className="heading-service">
        <h2 className="heading-service">Car Wash Services</h2>
      </div>
      <div className="para-service">
        <p>
          A professional car wash is essential to maintaining your vehicle's appearance and protecting its paintwork. We
          provide top-quality car wash services in Cardiff, ensuring your car looks spotless and well-maintained.
        </p>
      </div>
      <div className="photo-rotate">
        {services.map((service, index) => (
          <motion.div
            className="rotate-card"
            key={index}
            initial={{ opacity: 0 }}
            animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5, delay: index * 0.5 }}
          >
            <div className="rotate-card-inner">
              <div className="rotate-card-front">
              <img src={service.image} alt={service.title} loading="lazy" />

                <div className="image-text">{service.title}</div>
              </div>
              <div className="rotate-card-back">
                <img src={service.image} alt={service.title} />
                <div className="image-text-back">{service.description}</div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}