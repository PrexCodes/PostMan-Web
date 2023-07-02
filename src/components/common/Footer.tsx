import React from "react";
import styled from "styled-components";
import fly from "../../assets/fly.svg";
import img1 from "../../assets/twi.svg"
import img2 from "../../assets/githubsssssss.svg"
import img3 from "../../assets/download (7).svg"
import img4 from "../../assets/download (8).svg"
import img5 from "../../assets/download (6).svg"
const Footer = () => {

  const footerSocial = [
    {name: 'Twitter', image: img1},
    {name: 'LinkedIn', image: img4},
    {name: 'GitHub', image: img2},
    {name: 'YouTube', image: img3},
    {name: 'Twitch', image: img5},
  ]

  const footeritems = [
    {
      title: "Product",
      subtitle: [
        { title: "What is Postman?" },
        { title: "API Repository" },
        { title: "Tools" },
        { title: "Governance" },
        { title: "Workspace" },
        { title: "Integrations" },
        { title: "Enterprise" },
        { title: "Plans and Pricing" },
        { title: "Download the app" },
        { title: "Support center" },
      ],
    },
    {
      title: "Company",
      subtitle: [
        { title: "About" },
        { title: "Careers and Culture" },
        { title: "Press & Media" },
        { title: "Contact Us" },
        { title: "Partner Program" },
      ],
    },
    {
      title: "Security and Terms",
      subtitle: [
        { title: "Trust and Security" },
        { title: "Privacy Policy" },
        { title: "Terms" },
      ],
    },
    {
      title: "API Categories",
      subtitle: [
        { title: "eSignature" },
        { title: "Travel" },
        { title: "Database" },
        { title: "App Security" },
        { title: "Payments" },
      ],
    },
    {
      title: "Public elements",
      subtitle: [
        { title: "Collections" },
        { title: "APIs" },
        { title: "Workspaces" },
        { title: "Teams" },
      ],
    },
  ];
  return (
    <div>
      <Container>
        <Main>
          <LogoPart>
            <Logo src={fly} />
            <Copyright>© 2023 Postman, Inc.</Copyright>
          </LogoPart>
          <NavPart>
            {footeritems.map((el) => {
              return (
                <Navsection>
                  <HeadText>{el.title}</HeadText>
                  {el.subtitle.map(el=>{
                    return(
                      <SubText>{el.title}</SubText>
                    )
                  })}
                </Navsection>
              );
            })}
            <HeadText> Social </HeadText>
            {footerSocial.map(el=>{
              return(
                <SubText style={{margin: '10px 0px', }}> <Pics src={el.image}/> {el.name}</SubText>
              )
            })}
          </NavPart>
        </Main>
      </Container>
    </div>
  );
};

//#6B6B82

export default Footer;

const Pics = styled.img`
height: 15px;
margin-right: 10px;
`


const Logo = styled.img`
  height: 300px;
  margin-bottom: 10px;
`;
const SubText = styled.div`
  margin: 15px 0px;
  font-size: 13px;
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: ease-in-out 200ms;
  :hover{
    color: #3c3cce;
    
  }
`;
const HeadText = styled.div`
  font-size: 17px;
  margin: 15px 0px;
  font-weight: 600;
`;
const Copyright = styled.div``;
const LogoPart = styled.div`
  margin-right: 200px;
`;
const Navsection = styled.div``;
const NavPart = styled.div`
display: flex;
height: 380px;
width: 100%;
align-items: start;
justify-content: start;
flex-wrap: wrap;
flex-direction: column;
`;
const Main = styled.div`
  display: flex;
  width: 90%;
`;
const Container = styled.div`
  min-height: 400px;
  color: #6b6b82;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px 0px;
`;
