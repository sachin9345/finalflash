import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Carwaxingprocess.css";
import left from "./left.png";
import right from "./right.png";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  { title: "Thorough Wash & Cleanse", description: "We start with a wash to remove dirt and impurities." },
  { title: "Surface Preparation", description: "Light polishing to smooth out minor imperfections." },
  { title: "Premium Wax Application", description: "We apply high-quality carnauba or synthetic wax for maximum protection and shine." },
  { title: "Buffing & Final Touches", description: "The wax is buffed to a high-gloss finish for enhanced appearance and protection." },
];

export const CarWaxingProcess = () => {
  const sectionRef = useRef(null);
  const lineRef = useRef(null);
  const stepRefs = useRef([]);

  useEffect(() => {
    if (!sectionRef.current || !lineRef.current) return;

    let ctx = gsap.context(() => {
      // Smooth Reveal for Heading
      gsap.from(".carwax-title", {
        x: -200,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%", // Start effect earlier
          toggleActions: "play none none reverse",
        },
      });

      // **Fix: Smooth Pinning Effect**
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top top",
        end: "bottom-=50% top", // Unpin when 50% of the timeline is reached
        pin: true,
        pinSpacing: true,
        anticipatePin: 0.5, 
        scrub: 2, 
      });
      
      gsap.fromTo(
        lineRef.current,
        { height: "0%" },
        {
          height: "90%",  
          ease: "power1.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "bottom-=50% top", 
            scrub: 2, 
          },
        }
      );
      

      stepRefs.current.forEach((el, index) => {
        const dot = el.querySelector(".carwax-circle");
        const text = el.querySelector(".carwax-content");

        gsap.to(dot, {
          background: "white",
          scale: 1.5,
          duration: 0.4,
          ease: "power1.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            end: "top 50%",
            scrub: 1.5, 
          },
        });

        gsap.to(text, {
          color: "white",
          opacity: 1,
          duration: 0.6,
          ease: "power1.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            end: "top 50%",
            scrub: 1.5, 
          },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="carwax-process" ref={sectionRef}>
      <img src={right} alt="Top Gradient" className="gradient-top-right" />
      <img src={left} alt="Bottom Gradient" className="gradient-bottom-left" />

      <h3 className="carwax-title">Our Car Waxing Process</h3>

      <div className="carwax-timeline">
        <div className="carwax-line" ref={lineRef}></div>
        {steps.map((step, index) => (
          <div
            className={`carwax-item-wrapper ${index % 2 === 0 ? "right" : "left"}`}
            key={index}
            ref={(el) => (stepRefs.current[index] = el)}
          >
            <div className="carwax-circle"></div>
            <div className="carwax-item">
              <div className="carwax-content">
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
