import React from 'react';

const SkillCard = ({ skill }) => (
  <div className="card">
    <h3>{skill.title}</h3>
    <p>{skill.description}</p>
    <p><strong>Coins:</strong> {skill.coins}</p>
    <button>Request</button>
  </div>
);

export default SkillCard;
