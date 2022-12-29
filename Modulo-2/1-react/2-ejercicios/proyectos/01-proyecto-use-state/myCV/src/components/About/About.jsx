import React from 'react';
import './About.css';

const About = ({ hero }) => {
  const aboutMe = hero.aboutMe;

  return (
    <div className="about card">
      <h3>About Me</h3>
      {aboutMe.map((item) => (
        <p key={JSON.stringify(item)}>{item.info}</p>
      ))}
    </div>
  );
};

export default About;
