import styled from 'styled-components';

const StyledObstacle = styled.div`
  position: absolute;
  width: 50px;
  height: 50px;
  background-color: red;
`;

const Obstacle = ({ top, left }) => {
  return <StyledObstacle style={{ top, left }} />;
};

export default Obstacle;
