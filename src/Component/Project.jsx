import React, { useState } from 'react';
import { gsap } from 'gsap';
import '../Style/Project.css';
import image from '../assets/image.png';

const projects = {
    balloon1: [
        {
            id: 1,
            title: 'Web Project 1',
            description: 'A responsive web design project.',
            image: image,
            github: 'https://github.com/user/web-project1',
            website: 'https://example.com/web-project1',
        },
        {
            id: 2,
            title: 'Web Project 2',
            description: 'An e-commerce website project.',
            image: 'path/to/image2.jpg',
            github: 'https://github.com/user/web-project2',
            website: 'https://example.com/web-project2',
        },
    ],
    balloon2: [
        {
            id: 3,
            title: 'App Project 1',
            description: 'A cross-platform mobile app.',
            image: 'path/to/image3.jpg',
            github: 'https://github.com/user/app-project1',
            website: 'https://example.com/app-project1',
        },
        {
            id: 4,
            title: 'App Project 2',
            description: 'A weather forecast app.',
            image: 'path/to/image4.jpg',
            github: 'https://github.com/user/app-project2',
            website: 'https://example.com/app-project2',
        },
    ],
    balloon3: [
        {
            id: 5,
            title: 'Digital Marketing Campaign 1',
            description: 'An SEO optimization project.',
            image: 'path/to/image5.jpg',
            github: 'https://github.com/user/digital-project1',
            website: 'https://example.com/digital-project1',
        },
        {
            id: 6,
            title: 'Digital Marketing Campaign 2',
            description: 'A social media campaign.',
            image: 'path/to/image6.jpg',
            github: 'https://github.com/user/digital-project2',
            website: 'https://example.com/digital-project2',
        },
    ],
    balloon4: [
        {
            id: 7,
            title: 'SEO Project 1',
            description: 'A keyword research project.',
            image: 'path/to/image7.jpg',
            github: 'https://github.com/user/seo-project1',
            website: 'https://example.com/seo-project1',
        },
        {
            id: 8,
            title: 'SEO Project 2',
            description: 'A backlink-building project.',
            image: 'path/to/image8.jpg',
            github: 'https://github.com/user/seo-project2',
            website: 'https://example.com/seo-project2',
        },
    ],
};

const Project = () => {
    const [selectedProjects, setSelectedProjects] = useState([]);

    const handleBalloonClick = (balloonKey, e) => {
        const balloon = e.target;
        gsap.to(balloon, {
            scale: 0,
            rotation: 720,
            duration: 0.7,
            ease: 'back.in(2)',
            onComplete: () => {
                setSelectedProjects(projects[balloonKey]);
                gsap.fromTo(
                    '.project-details',
                    { opacity: 0, y: 50 },
                    { opacity: 1, y: 0, duration: 0.8, ease: 'power4.out' }
                );
                gsap.set(balloon, { scale: 1, rotation: 0 });
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
                            <img
                                src={project.image}
                                alt={project.title}
                                className="project-image"
                            />
                            <h3>{project.title}</h3>
                            <p>{project.description}</p>
                            <div className="project-links">
                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    GitHub Repo
                                </a>
                                <a
                                    href={project.website}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Visit Website
                                </a>
                            </div>
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
