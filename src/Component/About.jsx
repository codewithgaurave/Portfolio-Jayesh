import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import '../Style/About.css';
import aboutImage from '../assets/image.png';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
    useEffect(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".about-container",
                start: "top 80%", 
                end: "bottom 20%", 
                toggleActions: "play none none none", 
            },
        });

        tl.from(".about-title span", {
            y: 100,
            opacity: 0,
            stagger: 0.2,
            duration: 1,
            ease: "power4.out",
        })
            .from(
                ".about-text p",
                {
                    x: -50,
                    opacity: 0,
                    stagger: 0.3,
                    duration: 1,
                    ease: "power4.out",
                },
                "-=0.8"
            )
            .from(
                ".about-image",
                {
                    scale: 0,
                    opacity: 0,
                    duration: 1,
                    ease: "power4.out",
                },
                "-=0.8"
            );
    }, []);
      

  return (
    <section className="about-container">
      <div className="about-content">
        <p className="about-title">About Me</p>
        <div className="about-section">
          <div className="about-text">
            <p>
              Hey there! I'm a developer passionate about crafting stunning web experiences.
              I specialize in creating responsive, user-friendly interfaces while constantly
              pushing the boundaries of creativity and technology. I believe every line of
              code has the power to make a difference!
            </p>
          </div>
          <div className="about-image">
            <img src={aboutImage} alt="Profile" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

