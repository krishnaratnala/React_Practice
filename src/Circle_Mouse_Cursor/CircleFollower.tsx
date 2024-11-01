// CircleFollower.tsx
import React from 'react';
import useFollowMouse from './useFollowMouse';

const CircleFollower: React.FC = () => {
  const { x, y } = useFollowMouse();

  return (
    <div
      style={{
        position: 'absolute',
        top: y - 25, // Adjust to center the circle with the cursor
        left: x - 25,
        width: '50px',
        height: '50px',
        borderRadius: '50%',
        backgroundColor: 'blue',
        pointerEvents: 'none', // Makes the circle ignore mouse events
        transform: 'translate(-50%, -50%)', // Centers the circle over the cursor
      }}
    />
  );
};

export default CircleFollower;

