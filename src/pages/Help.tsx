import { useState } from 'react';
import styled from 'styled-components';
import DefaultButton from '../components/UI/Button';
import { useNavigate } from 'react-router-dom';

const Container = styled.div`
  position: relative;
  height: 100%;
  background-color: #404040;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Header = styled.div`
  position: absolute;
  width: 35%;
  top: 15%;
  left: 15%;
  color: #ecd355;
`;

const HeaderTitle = styled.div`
  font-size: 40px;
`;

const HeaderContent = styled.div`
  font-size: 28px;
  margin-top: 10px;
  margin-left: 30px;
`;

const HelpCharacter = styled.img`
  position: absolute;
  width: 30%;
  height: 30%;
  bottom: 20%;
  right: 10%;
`;

const ButtonContainer = styled.div`
  position: absolute;
  width: 82%;
  height: 10%;
  bottom: 8%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #212121;
`;

const BackGroundImg = styled.img`
  height: 100%;
  width: 100%;
`;

const Help = () => {
  const navigate = useNavigate();
  const [helpCharImg] = useState('/assets/images/HelpCharacter.png');
  const [helpBgImg] = useState('/assets/images/HelpBg.png');

  return (
    <Container>
      <BackGroundImg src={helpBgImg} />
      <Header>
        <HeaderTitle> 🟡 Story</HeaderTitle>
        <HeaderContent>
          평화로운 아루마을에
          <br />
          마법사가 나타났다.
          <br />
          마을을 파괴한다.
          <br />
          왕궁으로 간 마법사는
          <br />
          아루마을의 뽀야 공주에게
          <br />
          한눈에 반해 공주를 납치한다.
          <br />
          그후... 뻔한 스토리
          <br />
          정의의 기사가 나타난다.
          <br />
          그의 이름은 머다냥?!!!
          <br />
          과연 머다냥은 뽀야 공주를 구출할 수 있을까???
          <br />
        </HeaderContent>
      </Header>
      <HelpCharacter src={helpCharImg} />
      <ButtonContainer>
        <DefaultButton
          styleOverrides={{ marginRight: '10px' }}
          label="Back"
          onClick={() => navigate('/stage')}
        />
        <DefaultButton
          styleOverrides={{ marginRight: '10px' }}
          label="Main"
          onClick={() => navigate('/')}
        />
        <DefaultButton label="Front" onClick={() => navigate('/stage')} />
      </ButtonContainer>
    </Container>
  );
};

export default Help;
