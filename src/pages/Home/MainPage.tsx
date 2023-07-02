import React from "react";
import styled from "styled-components";
import hill from "../../assets/homepage-header-illustration.3385ecf.svg";
import hill3 from "../../assets/homepage-footer-illustration.d3da127.svg";
import hill2 from "../../assets/api-first-world-book-postman.png";
import card1 from "../../assets/icon1.svg";
import card2 from "../../assets/icon2.svg";
import card3 from "../../assets/icon3.svg";
import card4 from "../../assets/icon4.svg";
import Button2 from "../../components/static/Button2";
import { PiAddressBookFill, PiSquaresFourLight } from "react-icons/pi";
import image1 from "../../assets/b9724884cd02ea2f032eab63b55ac6ea4a2869516a26292bc1368d03c60f2054.png";
import image2 from "../../assets/8aa22ef6f0e83cc8be8300312a54d02deef77fefd19675920b623498ffbc3f26.png";
import image3 from "../../assets/d6e0c388e5ec0b6b4576089da82c220611be3a3bf3e56e36e25f49e1787db22b.png";
import image4 from "../../assets/86cdf1c9e9504adb78a20a839a73d7b12f5d83ae3ae82d80210c8805e71a7ee3.png";
import image5 from "../../assets/b0ddaa4bf50e7b2e044992775aca89a52788b07e501b7ded9c1e00a8c19233e9.png";
import image6 from "../../assets/c1e27423bcfaac2d0522a677ab389a60ab145d92e530ce3ddbbee6d0dd204939.jpg";
import image7 from "../../assets/c26bc1e4b4087fbe4d295af9573577df764b107105f732401c0a2dd6d8d83270.png";
import image8 from "../../assets/85cdc0e29da8fbc2de10406ed758ffefe1cbb6dfaf7281ae60a0e17c36d90c8f.jpg";
import image9 from "../../assets/27f4f619610457b8fd8f61dcd3bb178f649e3175ccb8c9f7cbf9349a3af01cb1.png";
import image10 from "../../assets/87b7e197a57247ba2fa19b5a24ad16d5977b000bc0cd4ce2fa8652110a43e732.png";
import image11 from "../../assets/cf4b7eed7f318f5c7e41fa598c4c01053eff101f864dd1e28786cdfb1341d532.png";

import { AiOutlineEye } from "react-icons/ai";
import Button1 from "../../components/static/Button1";

const MainPage = () => {
  const cardList2 = [
    {
      name: "Instagram",
      des: "Official Instagram API Workspace",
      comp: "By Meta",
      watch: "10+",
      views: "5k+",
      image: image1,
    },
    {
      name: "Mastercard Developers",
      des: "A workspace for exploring the Mastercard APIs published on the Mastercard Developers platform",
      comp: "By Mastercard",
      watch: "9",
      views: "1k+",
      image: image2,
    },
    {
      name: "Tomorrow.io API",
      des: "Tomorrow.io API provides hyperlocal weather data, including historical, real-time and forecast information, for any location globall",
      comp: "By tomorrow-io",
      watch: "2",
      views: "1k+",
      image: image3,
    },
    {
      name: "Merge Public Workspace",
      des: "Welcome to Merge's Public Postma collections!",
      comp: "By Merge",
      watch: "10",
      views: "3k+",
      image: image4,
    },
    {
      name: "Wowza Video REST API",
      des: "The Wowza Video API adds live streaming and playback functionality to your applications.",
      watch: "6",
      views: "3k+",
      image: image5,
    },
    {
      name: "Dolby.io Media APIs",
      des: "Dolby.io Media APIs Postman Collection",
      comp: "By tomorrow-io",
      watch: "5",
      views: "5k+",
      image: image6,
    },
    {
      name: "Intel® SecL-DC - SGX-Infrastructure",
      des: "Quick start API Collections for SGX Infrastructure and Orchestration use cases of Intel® SecL-DC",
      comp: "By tomorrow-io",
      watch: "1",
      views: "400+",
      image: image7,
    },

    {
      name: "Adyen APIs",
      des: "All Adyen APIs with documentation, variables and examples",
      comp: "By Ayden Developers",
      watch: "20+",
      views: "4k+",
      image: image8,
    },

    {
      name: "Pew Research Center",
      des: "This is a public workspace for Pew Research Center",
      comp: "By API Evangelist",
      watch: "1",
      views: "1k+",
      image: image9,
    },

    {
      name: "PayPal Public API Workspace",
      des: "Postman workspace where PayPal maintains official Postman collection(s) and environment(s)",
      comp: "By PayPal",
      watch: "50+",
      views: "1k+",
      image: image10,
    },
  ];
  const cardList3 = [
    {
      name: "The Kroger Co.",
      des: "With nearly 2,800 stores in 35 states, Kroger is one of the largest retailers, supporting developer and partner",
      comp: "By Meta",
      watch: "10+",
      views: "5k+",
      image: image11,
    },
    {
      name: "Zoom Developer",
      des: "A Postman space for devs and technical decision makers within the Zoom Developer Platform ecosystem.",
      watch: "9",
      views: "1k+",
      image: image2,
    },
    {
      name: "Tomorrow.io API",
      des: "Tomorrow.io API provides hyperlocal weather data, including historical, real-time and forecast information, for any location globall",
      comp: "By tomorrow-io",
      watch: "2",
      views: "1k+",
      image: image3,
    },
    {
      name: "Wowza Video REST API",
      des: "The Wowza Video API adds live streaming and playback functionality to your applications.",
      watch: "6",
      views: "3k+",
      image: image5,
    },
  ];

  const cardList = [
    {
      name: "API Tools",
      sname:
        "A comprehensive set of tools that help accelerate the API Lifecycle - from design, testing, documentation, and mocking to discovery.",
      img: card1,
    },
    {
      name: "API Repository",
      sname:
        "Easily store, iterate and collaborate around all your API artifacts on one central platform used across teams",
      img: card2,
    },
    {
      name: "Workspaces",
      sname:
        "Organize your API work and collaborate with teammates across your organization or stakeholders across the world.",
      img: card3,
    },
    {
      name: "Governance",
      sname:
        "Improve the quality of APIs with governance rules that ensure APIs are designed, built, tested, and distributed meeting organizational standards.",
      img: card4,
    },
  ];

  return (
    <div>
      <Container>
        <About>
          <Main>
            <HeadText> What is Postman?</HeadText>
            <SubText>
              {" "}
              Postman is an API platform for building and using APIs. Postman
              simplifies each step of the API lifecycle and streamlines
              collaboration so you can create better APIs—faster.
            </SubText>
            <PostImage src={hill} />
            <CardHolder>
              {cardList.map((el) => {
                return (
                  <Card>
                    <IconImg src={el.img} />
                    <IconHead>{el.name}</IconHead>
                    <IconCHead>{el.sname}</IconCHead>
                  </Card>
                );
              })}
            </CardHolder>
            <ButtHold>
              <Button2
                bor={"1px solid lightgray"}
                col={"black"}
                bg={"transparent"}
                hbg={"#f9f9f7"}
                des={"Learn More"}
              />
            </ButtHold>
          </Main>
        </About>
        <Happening>
          <Main>
            <HeadText> What is Postman?</HeadText>

            <span style={{ display: "flex", fontSize: "15px" }}>
              <SubTexts>
                Browse the largest network of APIs and share what you build with
                developers across the planet.
              </SubTexts>

              <SubTextss>Explore the Public API Network →</SubTextss>
            </span>

            <CardHolder style={{ marginTop: "30px" }}>
              {cardList2.map((el) => {
                return (
                  <Card2>
                    <Card2Logo src={el.image} />
                    <div>
                      <Ntext>{el.name}</Ntext>
                      <NStext> {el.des}</NStext>
                      <GrayPart>
                        <Icons />
                        <Intext> Workspace </Intext>
                        <Intext> {el.comp} </Intext>
                      </GrayPart>
                      <GrayPart>
                        <Icons2 />
                        <Intext> {el.watch} watchers </Intext>
                        <Intext> {el.views} views </Intext>
                      </GrayPart>
                    </div>
                  </Card2>
                );
              })}
            </CardHolder>
          </Main>
        </Happening>
        <Future>
          <Main>
            <HeadText> The future is API-first</HeadText>
            <SubText>
              {" "}
              At Postman, we believe the future will be built with APIs. The
              API-first World graphic novel tells the story of how and why the
              API-first world is coming to be.
            </SubText>
            <PostImage src={hill2} style={{ top: "30px" }} />

            <ButtHold
              style={{ justifyContent: "flex-start", marginTop: "20px" }}
            >
              <Button2
                bor={"1px solid lightgray"}
                col={"black"}
                bg={"transparent"}
                hbg={"#f9f9f7"}
                des={"Read the Graphic Novel"}
              />
            </ButtHold>
          </Main>
        </Future>
        <SpotLight>
          <Main>
            <HeadText> In the spotlight</HeadText>

            <span
              style={{ display: "flex", fontSize: "15px", alignItems: "end" }}
            >
              <SubTexts style={{ fontSize: "11.5px", lineHeight: 1.6 }}>
                The best APIs, collections, and workspaces handpicked by
                Postman.
              </SubTexts>

              <SubTextss>
                The best APIs, collections, and workspaces handpicked by
                Postman. →
              </SubTextss>
            </span>
            <CardHolder>
              <MinCards>
                <HeadText
                  style={{
                    display: "flex",
                    fontSize: "15px",
                    alignItems: "end",
                    marginTop: "25px",
                  }}
                >
                  {" "}
                  Trending APIs this week{" "}
                </HeadText>

                <span
                  style={{
                    display: "flex",
                    fontSize: "15px",
                    alignItems: "end",
                  }}
                >
                  <SubTexts style={{ fontSize: "11.5px", lineHeight: 1.6 }}>
                    There’s an API for that: discover the APIs, workspaces, and
                    collections the Postman community is creating, viewing, and
                    forking.
                    <SubTextss style={{ fontSize: "11.5px" }}>
                      View Complete List →
                    </SubTextss>
                  </SubTexts>
                </span>
              </MinCards>
              <MinCards>
                <HeadText
                  style={{
                    display: "flex",
                    fontSize: "15px",
                    alignItems: "end",
                    marginTop: "25px",
                  }}
                >
                  {" "}
                  New and Noteworthy{" "}
                </HeadText>

                <span
                  style={{
                    display: "flex",
                    fontSize: "15px",
                    alignItems: "end",
                  }}
                >
                  <SubTexts style={{ fontSize: "11.5px" }}>
                    Discover newly added public workspaces with public APIs from
                    a multitude of industries.
                    <SubTextss style={{ fontSize: "11.5px" }}>
                      View Complete List →
                    </SubTextss>
                  </SubTexts>
                </span>
              </MinCards>
            </CardHolder>

            <CardHolder style={{ marginTop: "10px" }}>
              {cardList2.map((el) => {
                return (
                  <Card2
                    style={{
                      width: "45%",
                      border: "none",
                      borderBottom: "1px solid lightgray",
                      paddingBottom: "10px",
                    }}
                  >
                    <Card2Logo src={el.image} />
                    <div>
                      <Ntext>{el.name}</Ntext>
                      <NStext> {el.des}</NStext>
                      <GrayPart>
                        <Icons />
                        <Intext> Workspace </Intext>
                        <Intext> {el.comp} </Intext>
                      </GrayPart>
                      <GrayPart>
                        <Icons2 />
                        <Intext> {el.watch} watchers </Intext>
                        <Intext> {el.views} views </Intext>
                      </GrayPart>
                    </div>
                  </Card2>
                );
              })}
            </CardHolder>
            <span
              style={{
                display: "flex",
                fontSize: "15px",
                alignItems: "center",
                paddingTop: "20px",
              }}
            >
              <SubTexts
                style={{ fontSize: "18px", fontWeight: "700", lineHeight: 1.6 }}
              >
                Popular Teams
              </SubTexts>

              <SubTextss>View All Teams →</SubTextss>
            </span>
            <CardHolder>
              {cardList3.map((el) => {
                return (
                  <Card2 style={{width: "23%", marginRight: '0px', paddingTop: '20px'}}>
                    <Card2Logo src={el.image} />
                    <div>
                      <Ntext>{el.name}</Ntext>
                      <NStext> {el.des}</NStext>
                      
                      <GrayPart>
                        <Icons3 />
                        <Intext> {el.watch} watchers </Intext>
                        <Intext> {el.views} views </Intext>
                      </GrayPart>
                    </div>
                  </Card2>
                );
              })}
            </CardHolder>
          </Main>
        </SpotLight>
        <Future style={{padding: '40px 0px'}}>
          <Main>
          <PostImage src={hill3}  style={{ top: "80px", height:'50%'}} />
            <HeadText> Get started with Postman</HeadText>
            <InputHolder>
              <Stext placeholder="jsmith@example.com" />
              <Button1
                styles={{
                  padding: "13.1px 13px",
                  borderRadius: "0px 5px 5px 0px",
                }}
                col={"white"}
                bg={"#FF6C37"}
                hbg={"#E05320"}
                des={"Sign Up for Free"}
              />

            </InputHolder>

            
          </Main>
        </Future>

      </Container>
    </div>
  );
};

export default MainPage;

const InputHolder = styled.div`
  display: flex;
  margin-top: 15px;
  width: 42%;
  align-items: center;
  caret-color: #ff6c37;
  ::placeholder {
    color: gray;
  }
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

const Icons = styled(PiSquaresFourLight)`
  margin-right: 3px;
`;
const Icons3 = styled(PiAddressBookFill)`
  margin-right: 3px;
`;
const Icons2 = styled(AiOutlineEye)`
  margin-right: 3px;
`;
const MinCards = styled.div`
  width: 45%;
  border-bottom: 1px solid lightgray;
  padding-bottom: 15px;
`;
const SpotLight = styled.div`
  min-height: 500px;
  padding: 70px 0px;
  background-color: white;
  width: 100%;
  display: flex;
  justify-content: center;
  position: relative;
`;
const GrayPart = styled.div`
  display: flex;
  color: #6b6f78;
  align-items: center;
  margin-bottom: 10px;
`;
const Intext = styled.div`
  margin-right: 10px;
`;
const Ntext = styled.div`
  font-size: 15px;
  font-weight: 600;
  transition: all 400ms;
`;
const NStext = styled.div`
  margin: 5px 0px;
  font-size: 12px;
  height: 40%;
  width: 100%;
`;
const Card2 = styled.div`
  height: 140px;
  width: 350px;
  margin-top: 20px;
  border: 1px solid whitesmoke;
  display: flex;
  justify-content: start;
  padding-top: 10px;
  font-size: 13px;
  border-radius: 5px;
  transition: all 350ms;
  :hover ${Ntext} {
    color: #3c3cce;
  }
  :hover {
    border: 1px solid lightgray;
    cursor: pointer;
    background-color: #fbf7f7;
  }
`;
const Card2Logo = styled.img`
  height: 30px;
  margin: 0px 10px;
`;

const SubTextss = styled.div`
  margin-top: 10px;
  color: #0265d7;
  margin-left: 4px;
  cursor: pointer;
  :hover {
    text-decoration: underline;
  }
`;
const SubTexts = styled.div`
  margin-top: 10px;
`;
const ButtHold = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;
const SubText = styled.div`
  width: 50%;
  margin-top: 15px;
  color: #6b6f78;
  font-size: 14px;
  line-height: 1.5;
`;
const CardHolder = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  flex-wrap: wrap;
`;
const IconCHead = styled.div`
  margin-top: 5px;
  color: #6b6f78;
  font-size: 12.5px;
  line-height: 1.7;
`;
const IconHead = styled.div`
  font-size: 17px;
  font-weight: 600;
  transition: ease-in-out 500ms;
`;
const Card = styled.div`
  height: 170px;
  width: 260px;
  padding: 10px 15px;
  background-color: white;
  margin: 40px 0px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  border-radius: 5px;
  border: 1px solid whitesmoke;
  transition: all 300ms;
  cursor: pointer;

  :hover ${IconHead} {
    color: #3c3cce;
  }
  :hover {
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  }
`;
const IconImg = styled.img`
  height: 35px;
  margin-top: 10px;
  margin-bottom: 10px;
`;
const PostImage = styled.img`
  position: absolute;
  top: -60px;
  right: 50px;
  height: 220px;
`;
const HeadText = styled.div`
  font-size: 24px;
  font-weight: 600;
`;
const Container = styled.div`
  margin-top: 40px;
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const Main = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const Future = styled.div`
  height: 300px;
  background-color: #f9f9f9;
  width: 100%;
  display: flex;
  justify-content: center;
  position: relative;
`;
const About = styled.div`
  height: 500px;
  background-color: #f9f9f9;
  width: 100%;
  display: flex;
  justify-content: center;
  position: relative;
`;
const Happening = styled.div`
  min-height: 500px;
  padding: 70px 0px;
  background-color: white;
  width: 100%;
  display: flex;
  justify-content: center;
  position: relative;
`;
