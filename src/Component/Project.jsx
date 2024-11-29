import React, { useState } from 'react';
import { gsap } from 'gsap';
import '../Style/Project.css';

const projects = {
    balloon1: [
        { id: 1, title: 'Project 1', description: 'Description for Project 1' },
        { id: 2, title: 'Project 2', description: 'Description for Project 2' },
    ],
    balloon2: [
        { id: 3, title: 'Project 3', description: 'Description for Project 3' },
        { id: 4, title: 'Project 4', description: 'Description for Project 4' },
    ],
    balloon3: [
        { id: 5, title: 'Project 5', description: 'Description for Project 5' },
        { id: 6, title: 'Project 6', description: 'Description for Project 6' },
    ],
    balloon4: [
        { id: 7, title: 'Project 7', description: 'Description for Project 7' },
        { id: 8, title: 'Project 8', description: 'Description for Project 8' },
    ],
};

const Project = () => {
    const [selectedProjects, setSelectedProjects] = useState([]);

    const handleBalloonClick = (balloonKey, e) => {
        // Animate the popping effect
        const balloon = e.target;
        gsap.to(balloon, {
            scale: 0,
            rotation: 720,
            duration: 0.7,
            ease: 'back.in(2)',
            onComplete: () => {
                setSelectedProjects(projects[balloonKey]); // Display related projects
                gsap.fromTo(
                    '.project-details',
                    { opacity: 0, y: 50 },
                    { opacity: 1, y: 0, duration: 0.8, ease: 'power4.out' }
                );
                gsap.set(balloon, { scale: 1, rotation: 0 }); // Reset balloon for next interaction
            },
        });
    };

    return (
        <div className="project-section">
            <h2 className="project-title">My Projects</h2>
            <div className="balloons">
                <div
                    className="balloon balloon1"
                    onClick={(e) => handleBalloonClick('balloon1', e)}
                >
                    Web Development
                </div>
                <div
                    className="balloon balloon2"
                    onClick={(e) => handleBalloonClick('balloon2', e)}
                >
                    App Development
                </div>
                <div
                    className="balloon balloon3"
                    onClick={(e) => handleBalloonClick('balloon3', e)}
                >
                    Digital Marketing
                </div>
                <div
                    className="balloon balloon4"
                    onClick={(e) => handleBalloonClick('balloon4', e)}
                >
                    SEO
                </div>
            </div>
            <div className="project-details">
                {selectedProjects.length > 0 ? (
                    selectedProjects.map((project) => (
                        <div key={project.id} className="project-card">
                            <h3>{project.title}</h3>
                            <p>{project.description}</p>
                        </div>
                    ))
                ) : (
                    <p>Click on a balloon to see the projects!</p>
                )}
            </div>
        </div>
    );
};

export default Project;
