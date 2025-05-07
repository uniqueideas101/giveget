import React from 'react';
import { useParams } from 'react-router-dom';

const TaskPage = () => {
  const { id } = useParams();

  return (
    <div>
      <h2>Task Details - ID: {id}</h2>
      <p>Here you'll display details of a specific task.</p>
    </div>
  );
};

export default TaskPage;
