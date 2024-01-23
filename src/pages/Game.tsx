import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import Player from '../components/character/MainCharacter';

type Direction = 'UP' | 'DOWN' | 'LEFT' | 'RIGHT';
type PlayerPosition = {
  x: number;
  y: number;
};
const MainMap = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  border: 1px solid black;
`;

const Game = () => {
  const [direction, setDirection] = useState<Direction>('LEFT');
  const [jumping, setJumping] = useState(false);
  const mainMapRef = useRef<HTMLDivElement | null>(null);
  const [playerPosition, setPlayerPosition] = useState<PlayerPosition>({
    x: 0,
    y: 600,
  });
  const handleKeyDown = (e) => {
    let newX = playerPosition.x;
    if (e.key === 'ArrowRight') {
      setDirection('RIGHT');
      newX = Math.min(playerPosition.x + 10, 850);
    } else if (e.key === 'ArrowLeft') {
      setDirection('LEFT');
      newX = Math.max(playerPosition.x - 10, 0);
    } else if (direction === 'RIGHT' && e.key === ' ' && !jumping) {
      setJumping(true);
      jump('right');
    } else if (direction === 'LEFT' && e.key === ' ' && !jumping) {
      setJumping(true);
      jump('left');
    }

    setPlayerPosition((prevPos) => ({ ...prevPos, x: newX }));
  };

  const jump = (direction: 'left' | 'right') => {
    const jumpHeight = 100;
    const jumpStartTime = Date.now();
    const xFix = jumpHeight * Math.cos(Math.PI);
    const jumpAnimation = () => {
      const elapsedTime = Date.now() - jumpStartTime;
      const jumpProgress = Math.min(1, elapsedTime / 500);
      const newX =
        direction === 'right'
          ? Math.min(
              850,
              playerPosition.x -
                xFix -
                jumpHeight * Math.cos(jumpProgress * Math.PI),
            ) // 오른쪽 점프
          : Math.max(
              0,
              playerPosition.x +
                xFix +
                jumpHeight * Math.cos(jumpProgress * Math.PI),
            ); // 왼쪽 점프
      const newY =
        playerPosition.y - jumpHeight * Math.sin(jumpProgress * Math.PI);

      setPlayerPosition(() => ({ x: newX, y: newY }));

      if (jumpProgress < 1) {
        requestAnimationFrame(jumpAnimation);
      } else {
        setJumping(false);
        setPlayerPosition((prevPos) => ({ ...prevPos }));
      }
    };

    requestAnimationFrame(jumpAnimation);
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [playerPosition.x]);

  return (
    <MainMap ref={mainMapRef}>
      <Player x={playerPosition.x} y={playerPosition.y} />
    </MainMap>
  );
};

export default Game;
