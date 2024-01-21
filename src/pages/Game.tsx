import React, { useState, useEffect } from 'react';
import Player from '../components/character/MainCharacter';

const Game = () => {
  const [playerPosition, setPlayerPosition] = useState({ x: 0, y: 350 });
  const [jumping, setJumping] = useState(false);

  const handleKeyDown = (e) => {
    // Update player position based on user input
    // For simplicity, use arrow keys to move the player horizontally

    // Calculate the new x position
    let newX = playerPosition.x;

    if (e.key === 'ArrowRight') {
      newX = Math.min(playerPosition.x + 10, 650);
    } else if (e.key === 'ArrowLeft') {
      newX = Math.max(playerPosition.x - 10, 0);
    } else if (e.key === ' ' && !jumping) {
      // Handle spacebar for jumping
      setJumping(true);
      jump();
    }

    setPlayerPosition((prevPos) => ({ ...prevPos, x: newX }));
  };

  const jump = () => {
    // Simulate a jump by changing the player's y position
    const jumpHeight = 100;
    const jumpStartTime = Date.now();

    const jumpAnimation = () => {
      const elapsedTime = Date.now() - jumpStartTime;
      const jumpProgress = Math.min(1, elapsedTime / 500); // Jump duration: 500ms
      const newX =
        playerPosition.x + jumpHeight * Math.cos(jumpProgress * Math.PI);
      const newX1 =
        playerPosition.x - jumpHeight * Math.cos(jumpProgress * Math.PI);
      const newY =
        playerPosition.y - jumpHeight * Math.sin(jumpProgress * Math.PI);

      setPlayerPosition(() => ({ x: newX1, y: newY }));

      if (jumpProgress < 1) {
        requestAnimationFrame(jumpAnimation);
      } else {
        setJumping(false);
        setPlayerPosition((prevPos) => ({ ...prevPos, y: 350 })); // Reset y position
      }
    };

    requestAnimationFrame(jumpAnimation);
  };

  useEffect(() => {
    // Add event listener for keyboard input
    window.addEventListener('keydown', handleKeyDown);

    // Remove event listener on component unmount
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [playerPosition.x]);

  return (
    <div
      style={{
        position: 'relative',
        width: '700px',
        height: '400px',
        border: '1px solid black',
      }}
    >
      <Player x={playerPosition.x} y={playerPosition.y} />
    </div>
  );
};

export default Game;
