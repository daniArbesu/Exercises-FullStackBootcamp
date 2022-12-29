import React from 'react';
import './More.css';

const More = ({ languages, habilities, volunteer }) => {
  console.log(volunteer);
  return (
    <div className="more card">
      <h3>Other skills</h3>
      <div className="languages">
        <h4>Languages:</h4>
        <p>{languages.language}</p>
        <p>Written: {languages.wrlevel}</p>
        <p>Spoken: {languages.splevel}</p>
      </div>
      <div className="habilities">
        <h4>Habilities:</h4>
        <ul>
          {habilities.map((hability) => (
            <li key={JSON.stringify(hability)}>{hability}</li>
          ))}
        </ul>
      </div>
      <div className="volunteer">
        <h4>Volunteer Work:</h4>
        {volunteer.map((item) => {
          return (
            <div key={JSON.stringify(item)}>
              <p className="name">📕 {item.name}</p>
              <p>{item.where}</p>
              <p>{item.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default More;
