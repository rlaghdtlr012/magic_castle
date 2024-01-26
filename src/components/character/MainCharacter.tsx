const MainCharacter = ({ x, y }) => {
  return (
    <div
      style={{
        position: 'absolute',
        width: '25px',
        height: '50px',
        background: 'blue',
        left: `${x}px`,
        top: `${y}px`,
      }}
    />
  );
};

export default MainCharacter;
