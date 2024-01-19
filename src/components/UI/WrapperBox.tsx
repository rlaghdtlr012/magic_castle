import WrapperBoxStyle from './WrapperStyle';

interface GlobalLayoutProps {
  children?: React.ReactNode;
}

function WrapperBox(props: GlobalLayoutProps) {
  return <WrapperBoxStyle>{props.children}</WrapperBoxStyle>;
}

export default WrapperBox;
