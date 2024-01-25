import { CSSProperties } from 'styled-components';
import { DefaultButtonStyle } from './ButtonStyle';
import { ReactNode } from 'react';

interface Props {
  label: string;
  icon?: ReactNode;
  styleOverrides?: CSSProperties;
}

function DefaultButton({
  label,
  icon,
  styleOverrides,
  ...rest
}: Props & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <DefaultButtonStyle styleOverrides={styleOverrides} {...rest}>
      {icon && icon}
      <div style={{ textAlign: 'center' }}>
        <p style={{ margin: 0 }}>{label}</p>
      </div>
    </DefaultButtonStyle>
  );
}
export default DefaultButton;
