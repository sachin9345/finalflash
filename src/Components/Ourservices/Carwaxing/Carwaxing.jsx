import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Carwaxing.css";
import carWaxingImage from "./cc.jpg";

gsap.registerPlugin(ScrollTrigger);

export const CarWaxing = () => {
  const sectionRef = useRef(null);
  const containerRef = useRef(null);
  const textRefs = useRef([]);

  useEffect(() => {
    const isLargeScreen = window.innerWidth > 1024;

    const ctx = gsap.context(() => {
      if (isLargeScreen) {
        // For PC: Use ScrollTrigger Pinning
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "+=400%",
            pin: true,
            scrub: 0.5,
            anticipatePin: 1,
          },
        });

        textRefs.current.forEach((el, index) => {
          tl.fromTo(
            el,
            { opacity: 0, y: 80 },
            { opacity: 1, y: 0, duration: 1.2, ease: "power3.out" },
            index * 1.0
          );
        });

        tl.to(containerRef.current, { opacity: 1, duration: 1.5 }, "+=1");
      } else {
        // For Mobile: Use Normal Fade-in without ScrollTrigger
        gsap.fromTo(
          textRefs.current,
          { opacity: 0, y: 40 },
          { opacity: 1, y: 0, duration: 1.2, ease: "easeInOut" }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const benefits = [
    "Protect against UV rays and oxidation",
    "Prevent dirt and grime from sticking to the surface",
    "Reduce water spots and enhance water beading",
    "Add depth and shine for a showroom finish",
    "Extend the lifespan of your car’s paintwork",
  ];

  return (
    <section className="car-waxing-section" ref={sectionRef}>
      <div className="car-waxing-container" ref={containerRef}>
        <div className="image-container">
          <img src={carWaxingImage} alt="Car Waxing" />
        </div>
        <div className="text-content">
          <h2>
            Car Waxing not only enhances your vehicle’s appearance but also{" "}
            <strong>shields it from environmental damage.</strong>
          </h2>
          <h3>Car wax forms a protective layer over your vehicle’s paint, helping to:</h3>
          <ul className="benefits-list">
            {benefits.map((benefit, index) => (
              <li key={index} ref={(el) => (textRefs.current[index] = el)}>
                {benefit}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
