import React from 'react';

const ProfilePage = () => {
  // In a real app, you'd fetch user data here
  return (
    <div>
      <h2>Your Profile</h2>
      <p>Name: Jane Doe</p>
      <p>Coins: 50</p>
      <h3>Your Listed Skills</h3>
      <ul>
        <li>React Mentorship - 10 coins</li>
        <li>Logo Design - 8 coins</li>
      </ul>
    </div>
  );
};

export default ProfilePage;
