import styled from 'styled-components';

const StyledLadder = styled.div`
  position: absolute;
  width: 20px;
  height: 100px;
  background-color: brown;
`;

const Ladder = ({ top, left }) => {
  return <StyledLadder style={{ top, left }} />;
};

export default Ladder;
