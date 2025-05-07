import React, { useState } from 'react';
import SkillCard from '../components/SkillCard';

const dummySkills = [
  { id: 1, title: 'Web Design', description: 'I can design your website.', coins: 10 },
  { id: 2, title: 'Guitar Lessons', description: 'Basic to advanced guitar lessons.', coins: 15 },
];

const Home = () => {
  const [skills] = useState(dummySkills);

  return (
    <div>
      <h2>Available Skills</h2>
      {skills.map(skill => (
        <SkillCard key={skill.id} skill={skill} />
      ))}
    </div>
  );
};

export default Home;
