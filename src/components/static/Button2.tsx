import React from "react";
import styled from "styled-components";

interface iButton {
  col: string;
  hbg: string;
  bg: string;
  des: string;
  bor: string
}

const Button2: React.FC<iButton> = ({ col, bor, hbg, bg, des }) => {
  return (
    <div>
      <Container>
        <Main bor={bor} col={col} bg={bg} hbg={hbg}>
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
const Main = styled.div<{ bor: string, bg: string; hbg: string; col: string }>`
  padding: 8px 13px;
  font-size: 12px;
  border-radius: 5px;
  background-color: ${({ bg }) => bg};
  color: ${({ col }) => col};
  border: ${({ bor }) => bor};
  font-weight: 400;
  transition: all 400ms;
  :hover {
    cursor: pointer;
    background-color: ${({ hbg }) => hbg};
    border: 1px solid darkgrey
    
  }
`;

export default Button2;
