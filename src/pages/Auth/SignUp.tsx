import React from "react";
import styled from "styled-components";
import img from "../../assets/google-logo-icon-sign-in.svg";
import img2 from "../../assets/hero.svg";
import { NavLink } from "react-router-dom";

const SignUp = () => {
  return (
    <div>
      <Container>
        <Main>
          <Divs>
            <Left>
              <Card2>
                <Pics src={img2} />
              </Card2>
            </Left>
            <Right>
              <Card>
                <Sign>
                  <Texts>Create Postman Account</Texts>
                  <Create>
                  
                  <NavLinks to={'/login'}> <I>Sign In</I> </NavLinks> <P>instead?</P>
                  </Create>
                </Sign>
                <Text2>Email</Text2>
                <Input type="text" />
                <Text2>Username</Text2>
                <Input type="text" />
                <Text2>Password</Text2>
                <Input type="password" />

                <Check>
                  <Text3>
                    <Inputs type="checkbox" />
                    Sign up to get product updates, news, and other.
                  </Text3>
                </Check>
                <Text3>marketing communications</Text3>
                <D>
                  <Check>
                    <Text3>
                      <Inputs type="checkbox" />
                      Stay signed in for 30 days.
                    </Text3>
                  </Check>
                </D>

                <Text4>
                  By creating an account, I agree to the Terms and Privacy
                  Policy.
                </Text4>

                <Button>Create free Account</Button>

                <Or>
                  <Line></Line>
                  <T>or</T>
                  <Line></Line>
                </Or>

                <ButtonHold>
                  <Div>
                    <Pics2 src={img} />
                  </Div>
                  <Button2>Sign in With Google</Button2>
                </ButtonHold>

                <Button3>Sign in With SSO</Button3>
              </Card>
            </Right>
          </Divs>
        </Main>
        <Text>©2023 Postman, Inc. All rights reserved.</Text>
      </Container>
    </div>
  );
};

export default SignUp;

const NavLinks = styled(NavLink)`
    color: #377FF3;
    text-decoration: none;
` 

const Pics2 = styled.img`
  height: 19px;
  margin-right: 10px;
`;

const Pics = styled.img``;

const Divs = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;
const Card2 = styled.div`
  width: 335px;
  height: 675px;
  padding: 0px 45px;
  margin-top: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: white;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
  border-radius: 5px;
`;

const Left = styled.div``;

const Right = styled.div`
margin-left: -10px;
`;
const D = styled.div`
  margin-top: 15px;
`;
const Button3 = styled.div`
  height: 40px;
  border-radius: 3px;
  width: 97%;
  background-color: #f2f2f2;
  margin-top: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 10px;
  color: gray;
  font-family: 700;
  font-size: 15px;
  cursor: pointer;
`;

const Button2 = styled.div`
  width: 95%;
  height: 100%;
  background-color: #377ff3;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-family: 700;
  font-size: 15px;
  cursor: pointer;

  :hover {
    background-color: #2b77f3;
  }
`;

const Div = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 10%;
  color: #3c5012;
`;

const ButtonHold = styled.div`
  height: 40px;
  border-radius: 3px;
  width: 97%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  padding-left: 10px;
  outline: 1px solid #377ff3;
`;

const T = styled.div`
  margin: 0 30px;
  color: gray;
  font-size: 13px;
`;
const Line = styled.div`
  width: 90px;
  height: 1px;
  background-color: lightgray;
`;
const Or = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
`;

const Button = styled.div`
  height: 40px;
  border-radius: 3px;
  width: 97%;
  background-color: #ff6c37;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  padding-left: 10px;
  margin-bottom: 30px;
  color: white;
  font-family: 700;
  font-size: 15px;
  cursor: pointer;

  :hover {
    background-color: #f15a22;
  }
`;

const Text4 = styled.div`
  font-size: 13px;
  margin-top: 10px;
  /* font-weight: 500; */
  /* color: blue; */
`;
const Text3 = styled.div`
  font-size: 13px;
  display: flex;
  align-items: center;
  margin-top: -6px;
`;
const Inputs = styled.input`
  width: 20px;
  height: 30px;
  accent-color: #f26b3a;
  cursor: pointer;
`;
const Check = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Input = styled.input`
  height: 40px;
  border-radius: 3px;
  width: 97%;
  background-color: #fafafa;
  outline: 1px solid lightgray;
  border: none;
  margin-top: 10px;
  padding-left: 10px;
  margin-bottom: 20px;

  :hover {
    outline-color: gray;
  }

  :focus {
    outline: 1px solid #ee6d3f;
  }
`;

const Text2 = styled.div`
  font-size: 13px;
  font-weight: 500;
  color: #585656;
`;

const P = styled.div`
  color: black;
  margin-left: 3px;
  font-weight: 400;
`;

const I = styled.div`
  color: #377FF3;

  :hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;
const Create = styled.div`
  display: flex;
  font-size: 12px;
  font-weight: 500;
`;

const Texts = styled.div`
  font-size: 18px;
  font-weight: 500;
`;

const Sign = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* margin-top: 65px; */
  margin-bottom: 20px;
`;

const Text = styled.div`
  color: gray;
  font-size: 13px;
  margin-top: 60px;
  margin-bottom: 20px;
`;

const Card = styled.div`
  width: 335px;
  height: 675px;
  padding: 0px 30px;
  margin-top: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: white;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
  /* border-radius: 5px; */
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  z-index: 2;
`;

const Main = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90%;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 100vh;
  background-color: #f2f2f2;
`;
