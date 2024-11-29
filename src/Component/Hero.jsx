import React, { useEffect } from "react";
import { gsap } from "gsap";
import "../Style/Hero.css";
import Navbar from "./Navbar";
import hero from "../assets/image.png";

const Hero = () => {
  useEffect(() => {
    const shapes = document.querySelectorAll(".shape");
    const backgroundCircle = document.querySelector(".background-circle");
    const circleImage = document.querySelector(".CircleImage");

    gsap.fromTo(
      backgroundCircle,
      {
        x: "50%",
        y: "50%",
        scale: 0.5,
        opacity: 0.3,
        filter: "blur(10px)",
      },
      {
        x: () => gsap.utils.random(10, 90) + "%",
        y: () => gsap.utils.random(10, 90) + "%",
        scale: gsap.utils.random(0.5, 1.3),
        opacity: gsap.utils.random(0.2, 0.6),
        filter: "blur(0px)",
        duration: gsap.utils.random(12, 20),
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      }
    );

    shapes.forEach((shape) => {
      gsap.fromTo(
        shape,
        {
          x: gsap.utils.random(-200, 200),
          y: gsap.utils.random(-200, 200),
          opacity: 0.4,
          rotation: gsap.utils.random(-45, 45),
        },
        {
          x: gsap.utils.random(0, 800),
          y: gsap.utils.random(0, 600),
          opacity: 1,
          rotation: gsap.utils.random(-360, 360),
          duration: gsap.utils.random(6, 12),
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        }
      );
    });

    gsap.fromTo(
      ".hero-title",
      {
        opacity: 0,
        y: 50,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
      }
    );

    gsap.fromTo(
      ".hero-description",
      {
        opacity: 0,
        y: 30,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: 0.3,
        ease: "power3.out",
      }
    );

    gsap.fromTo(
      ".cta-btn",
      {
        scale: 1,
        backgroundColor: "#ff6f61",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.2)",
      },
      {
        scale: 1.1,
        backgroundColor: "#e85b4f",
        boxShadow: "0 6px 8px rgba(0, 0, 0, 0.3)",
        paused: true,
        duration: 0.3,
        ease: "power1.out",
        repeat: -1,
        yoyo: true,
      }
    );

    gsap.fromTo(
      ".hero-illustration .illustration",
      {
        x: -100,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        duration: 1.2,
        ease: "power3.out",
      }
    );

    gsap.to(circleImage, {
      rotation: 360,
      repeat: -10,
      duration: 6,
      ease: "linear",
      transformOrigin: "50% 60%",
    });
  }, []);

  return (
    <>
      <Navbar />
      <div className="hero">
        <div className="hero-content">
          <h1 className="hero-title">
            Hi, I'm <span className="highlight">Jayesh Singh</span>
          </h1>
          <p className="hero-description">
            As a passionate developer, I believe in the power of continuous
            growth and the art of crafting exceptional digital experiences.
            Every project I work on is an opportunity to innovate, improve, and
            deliver clean, efficient solutions. My goal is to transform ideas
            into polished, user-friendly designs, making every portfolio I build
            not just a showcase, but a statement of skill, creativity, and
            dedication.
          </p>
          <div className="cta-buttons">
            <button className="cta-btn">View My Work</button>
            <button className="cta-btn">Get in Touch</button>
          </div>
        </div>
        <div className="hero-illustration">
          <div className="CircleImage"></div>
          <img
            src={hero}
            alt="Developer Illustration"
            className="illustration"
          />
        </div>
        <div className="animated-shapes">
          <div className="shape background-circle"></div>
          <div className="shape circle"></div>
          <div className="shape square"></div>
          <div className="shape circle"></div>
          <div className="shape hexagon"></div>
        </div>
      </div>
    </>
  );
};

export default Hero;
