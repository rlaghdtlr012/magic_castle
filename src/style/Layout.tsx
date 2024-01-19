import { ReactNode } from 'react';
import styled from 'styled-components';
import WrapperBox from '../components/UI/WrapperBox';

const MainLayout = styled.main`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function Layout({ children }: { children: ReactNode }) {
  return (
    <MainLayout>
      <WrapperBox>{children}</WrapperBox>
    </MainLayout>
  );
}
export default Layout;
