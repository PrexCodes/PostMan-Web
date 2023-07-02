import React from "react";
import styled from "styled-components";

interface iButton {
  col: string;
  hbg: string;
  bg: string;
  des: string;
  styles?: React.CSSProperties
}

const Button1: React.FC<iButton> = ({ col, hbg, bg, des, styles }) => {
  return (
    <div>
      <Container>
        <Main col={col} bg={bg} hbg={hbg} style={styles}>
          {des}
        </Main>
      </Container>
    </div>
  );
};

const Container = styled.div`
  display: flex;
  margin-right: 10px;
`;
const Main = styled.div<{ bg: string; hbg: string; col: string }>`
  padding: 8px 13px;
  font-size: 12px;
  border-radius: 0px;
  background-color: ${({ bg }) => bg};
  color: ${({ col }) => col};
  font-weight: 600;
  transition: all 400ms;
  cursor: pointer;
  :hover {
    background-color: ${({ hbg }) => hbg};
  }
`;

export default Button1;
