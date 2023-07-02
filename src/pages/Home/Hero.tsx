import React from "react";
import styled from "styled-components";
import Button1 from "../../components/static/Button1";
import log1 from "../../assets/microsoft-logo-light.a08a342.svg";
import log2 from "../../assets/linux-logo-light.c97e8fe.svg";
import log3 from "../../assets/apple.svg";
import bgI from "../../assets/96bff51802e8a43c.png";

const Hero = () => {
    const logo = [
        
    ]
  return (
    <div>
      <Container>
        <Main>
          <TextPart>
            <BigText>Build</BigText>
            <MidText>APIs together</MidText>
            <SmallText>
              Over 25 million developers use Postman. Get started by signing up
              or downloading the desktop app.
            </SmallText>
            <InputHolder>
              <Stext placeholder="jsmith@example.com" />
              <Button1
                styles={{
                  padding: "13px 13px",
                  borderRadius: "0px 5px 5px 0px",
                }}
                col={"white"}
                bg={"#FF6C37"}
                hbg={"#E05320"}
                des={"Sign Up for Free"}
              />
            </InputHolder>
            <MinText>Download the desktop app for</MinText>
            <LogoHolder>
              <Logos>
                <Logo src={log1} />
                <Htext> Windows </Htext>
              </Logos>
              <Logos>
                <Logo src={log2} />
                <Htext> Apple </Htext>
              </Logos>
              <Logos>
                <Logo src={log3} />
                <Htext> Linux </Htext>
              </Logos>
            </LogoHolder>
          </TextPart>
          <BGImg src={bgI}/>
        </Main>
      </Container>
    </div>
  );
};

export default Hero;
const BGImg = styled.img`
height: 105%;
object-fit: cover;
width: auto;
position: absolute;
top: 10px;
right: 0px;
`
const Htext = styled.div`
margin-top: 15px;
font-size: 11px;
padding: 5px 5px;
  box-shadow: rgba(0, 0, 0, 0.05) 1.95px 1.95px 2.6px;
  transform: scale(0);
  transition: all 400ms;

  
background-color: whitesmoke;
`;
const Logos = styled.div`
margin-right: 15px;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;

:hover ${Htext}{
    transform: scale(1)
}

`;
const MinText = styled.div`
  margin: 10px 0px;
`;
const Logo = styled.img`
  
  :hover {
  }
`;
const LogoHolder = styled.div`
display: flex;
justify-content: start;
`;
const InputHolder = styled.div`
  display: flex;
  align-items: center;
  caret-color: #ff6c37;
  ::placeholder {
    color: gray;
  }
`;
const TextPart = styled.div`
  width: 35%;
`;

const Stext = styled.input`
  height: 33.5px;
  padding-top: 5px;
  width: 60%;
  padding-left: 10px;
  outline: none;
  border: 1px solid #ff6c37;
  border-radius: 5px 0px 0px 5px;
  background-color: transparent;
  font-size: 12.5px;
  ::placeholder{
    
    color: gray;
    font-size: 15px;
    font-weight: 500;
  }
`;

const SmallText = styled.div`
  line-height: 1.5;
  margin-top: 10px;
  margin-bottom: 30px;
  width: 90%;
`;
const MidText = styled.div`
  font-size: 28px;
  font-family: Consolas;
  font-weight: 600;
`;
const BigText = styled.div`
  font-size: 40px;
  font-family: Consolas;
  font-weight: 700;
`;
const Main = styled.div`
  display: flex;
  width: 90%;
 
  justify-content: space-between;
  `;
const Container = styled.div`
position: relative;
  width: 100%;
  height: calc(100vh - 80px);
  display: flex;
  justify-content: center;
  align-items: end;
  margin-bottom: 40px;
`;
