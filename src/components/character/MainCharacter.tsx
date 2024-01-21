const Player = ({ x, y }) => {
  return (
    <div
      style={{
        position: 'absolute',
        width: '50px',
        height: '50px',
        background: 'blue',
        left: `${x}px`,
        top: `${y}px`,
      }}
    />
  );
};

export default Player;
