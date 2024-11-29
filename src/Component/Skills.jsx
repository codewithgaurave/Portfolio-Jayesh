import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '../Style/skills.css';

const skillsData = [
    { id: 1, name: 'HTML', level: 90 },
    { id: 2, name: 'CSS', level: 85 },
    { id: 3, name: 'JavaScript', level: 80 },
    { id: 4, name: 'React', level: 75 },
    { id: 5, name: 'Node.js', level: 70 },
];

const Skills = () => {
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        gsap.fromTo(
            '.skill-bar-fill',
            { width: '0%' },
            {
                width: (i, el) => el.getAttribute('data-level') + '%',
                duration: 1.5,
                ease: 'power4.out',
                scrollTrigger: {
                    trigger: '.skills-container',
                    start: 'top 80%',
                    end: 'bottom 20%',
                    toggleActions: 'play none none none',
                },
            }
        );

        gsap.fromTo(
            '.skill-title',
            { opacity: 0, y: 20 },
            {
                opacity: 1,
                y: 0,
                stagger: 0.2,
                duration: 1,
                ease: 'power4.out',
                scrollTrigger: {
                    trigger: '.skills-container',
                    start: 'top 80%',
                },
            }
        );
    }, []);

    return (
        <section className="skills-container">
            <h2 className="skills-title">My Skills</h2>
            <div className="skills-list">
                {skillsData.map((skill) => (
                    <div key={skill.id} className="skill">
                        <div className="skill-title">{skill.name}</div>
                        <div className="skill-bar">
                            <div
                                className="skill-bar-fill"
                                data-level={skill.level}
                                style={{ backgroundColor: skill.color }}
                            ></div>
                        </div>
                        <div className="skill-percentage">{skill.level}%</div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Skills;
