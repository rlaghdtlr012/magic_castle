import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import DefaultButton from '../components/UI/Button';
import { useNavigate } from 'react-router-dom';

interface MagicTextProps {
  visible: boolean;
}

const Container = styled.div`
  position: relative;
`;

const TitleImg = styled.img`
  height: 100%;
  width: 100%;
  background-color: black;
`;

const ButtonContainer = styled.div`
  position: absolute;
  bottom: 20px;
  right: 20px;
  margin: 10px;
`;

const MagicText = styled.div<MagicTextProps>`
  position: absolute;
  top: 40%;
  right: 40px;
  transform: translateY(-50%);
  font-size: 100px;
  color: red;
  display: flex;
  flex-direction: column;
  align-items: center;
  opacity: ${(props) => (props.visible ? '1' : '0')};
  transition: opacity 1s ease-in-out;
`;

function Home() {
  const navigate = useNavigate();
  const [img, setImage] = useState('/assets/images/mainCastle.png');
  const [magicTextVisible, setMagicTextVisible] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const startBgm = () => {
    if (audioRef.current) {
      audioRef.current.play();
    }
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setImage((prevImg) =>
        prevImg === '/assets/images/mainCastle.png'
          ? '/assets/images/mainCastleLightning.png'
          : '/assets/images/mainCastle.png',
      );
    }, 800);

    // Show magic text after 1 second
    const timeoutId = setTimeout(() => {
      setMagicTextVisible(true);
    }, 1000);

    return () => {
      clearInterval(intervalId);
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <Container onClick={() => startBgm()}>
      <audio ref={audioRef} src="/assets/sound/mainBgm.mp3" loop>
        <track kind="captions" srcLang="en" label="English" />
      </audio>
      <TitleImg src={img} />
      <MagicText visible={magicTextVisible}>
        <div>마</div>
        <div>법</div>
        <div>의</div>
        <div>성</div>
      </MagicText>
      <ButtonContainer>
        <DefaultButton
          styleOverrides={{ marginBottom: '10px' }}
          label="Start"
          onClick={() => navigate('/stage')}
        />
        <DefaultButton label="Help" />
      </ButtonContainer>
    </Container>
  );
}

export default Home;
