import styled from 'styled-components';
import DefaultButton from '../components/UI/Button';
import { useNavigate } from 'react-router-dom';

const ErrorImgBox = styled.div`
  width: 164.4px;
  height: 102px;
  background-image: url('192.168.62.14/assets/images/error-404.png'});
  margin: 302px auto 20px;
`;

const ErrorTitle = styled.p`
  font-family: 'RixInooAriDuriR';
  font-size: 25px;
  font-weight: 400;
  color: #333;
  margin: 0 auto 40px;
  text-align: center;
`;

function ErrorPage() {
  const navigate = useNavigate();
  return (
    <>
      <ErrorImgBox />
      <ErrorTitle>인증되지 않은 접근입니다.</ErrorTitle>
      <DefaultButton
        styleOverrides={{ backgroundColor: '#CC6600' }}
        label="홈으로 돌아가기"
        onClick={() => navigate('/')}
      />
    </>
  );
}

export default ErrorPage;
