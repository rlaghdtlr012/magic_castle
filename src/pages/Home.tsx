import { useEffect, useState } from 'react';
import styled from 'styled-components';

const TitleImg = styled.img`
  height: 100%;
  width: 100%;
  background-color: black;
`;

function Home() {
  const [img, setImage] = useState('/assets/images/mainCastle.png');

  useEffect(() => {
    const intervalId = setInterval(() => {
      setImage((prevImg) =>
        prevImg === '/assets/images/mainCastle.png'
          ? '/assets/images/mainCastleLightning.png'
          : '/assets/images/mainCastle.png',
      );
    }, 500);

    return () => clearInterval(intervalId);
  }, []);

  return <TitleImg src={img} />;
}

export default Home;
