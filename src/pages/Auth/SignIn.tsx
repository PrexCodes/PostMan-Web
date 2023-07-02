import React from 'react'
import styled from 'styled-components'
import img from "../../assets/postman_logo-removebg-preview.png"
import img2 from "../../assets/google-logo-icon-sign-in.svg"
import { NavLink } from 'react-router-dom'

const SignIn = () => {
  return (
    <div>
        <Container>
            <Card>
                <NavLinks to={'/'}>
                <Logo src={img}/>
                </NavLinks>
                <Sign>
                    <Texts>Sign In</Texts>
                    <Create> 
                        <NavLinks to={'/signup'}>
                        <I> Create Account</I>
                        </NavLinks>
                         <P>instead?</P></Create>
                </Sign>
                    <Text2>Email or Username</Text2>
                    <Input type='text'/>
                    <Text2>Password</Text2>
                    <Input type='password'/>

                    <Check>
                        <Text3><Inputs type='checkbox'/>Stay signed in for 30 days</Text3>
                        <Text4>Forgot Password?</Text4>
                    </Check>

                    <Button>Sign in</Button>

                    <Or>
                        <Line></Line>
                        <T>or</T>
                        <Line></Line>
                    </Or>

                    <ButtonHold>
                        <Div>
                            <Pics2 src={img2} />
                        </Div>
                        <Button2>Sign in With Google</Button2>
                    </ButtonHold>

                    <Button3>Sign in With SOS</Button3>
            </Card>
            <Text>©2023 Postman, Inc. All rights reserved. Terms of use Privacy Policy</Text>
        </Container>
    </div>
  )
}

export default SignIn

const NavLinks = styled(NavLink)`
    color: #377FF3;
    text-decoration: none;
` 

const Pics2 = styled.img`
height: 19px;
margin-right: 10px;
`
const Button3 = styled.div`
height: 40px;
border-radius: 3px;
width: 97%;
background-color: #F2F2F2;
margin-top: 15px;
display: flex;
justify-content: center;
align-items: center;
padding-left: 10px;
color: gray;
font-family: 700;
font-size: 15px;
cursor: pointer;

`

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

:hover{
    background-color: #2B77F3;
}
`

const Div = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 10%;
color: #3c5012;
`

const ButtonHold = styled.div`
height: 40px;
border-radius: 3px;
width: 97%;
/* background-color: red; */
display: flex;
justify-content: center;
align-items: center;
margin-top: 10px;
padding-left: 10px;
outline: 1px solid #377ff3;

`

const T = styled.div`
margin: 0 30px;
color: gray;
font-size: 13px;
`
const Line = styled.div`
width: 90px;
height: 1px;
background-color: lightgray;
`
const Or = styled.div`
display: flex;
align-items: center;
justify-content: center;
margin-bottom: 10px;
`

const Button = styled.div`
height: 40px;
border-radius: 3px;
width: 97%;
background-color: #F26B3A;
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

:hover{
    background-color: #F15A22;
}
`

const Text4 = styled.div`
font-size: 13px;
font-weight: 500;
color: blue;
`
const Text3 = styled.div`
font-size: 13px;
display: flex;
align-items: center;
`
const Inputs = styled.input`
width: 20px;
height: 30px;
accent-color: #F26B3A;

`
const Check = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
`

const Input = styled.input`
height: 40px;
border-radius: 3px;
width: 97%;
background-color: #FAFAFA;
outline: 1px solid lightgray;
border:none;
margin-top: 10px;
padding-left: 10px;
margin-bottom: 20px;

:hover{
    outline-color: gray;
}

:focus{
    outline: 1px solid #EE6D3F;
}
`

const Text2 = styled.div`
font-size: 13px;
font-weight: 500;
color: #585656;
`

const P = styled.div`
color: black;
margin-left: 3px;
font-weight: 400;
`

const I = styled.div`
color: blue;

:hover{
    cursor: pointer;
    text-decoration: underline;
}
`
const Create = styled.div`
display: flex;
font-size: 13px;
font-weight: 500;
`

const Texts = styled.div`
font-size: 20px;
font-weight: 500;
`

const Sign = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
margin-top: 65px;
margin-bottom: 20px;
`

const Text = styled.div`
color: gray;
font-size: 14px;
margin-top: 60px;
margin-bottom: 20px;
`

const Logo = styled.img`
height: 110px;
    position: absolute;
    top: -50px;
    right: 140px;
`

const Card = styled.div`
width: 335px;
height: 550px;
padding: 0px 30px;
margin-top: 100px;
background-color: white;
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
    border-radius: 5px;
    position: relative;
`

const Container = styled.div`
    width: 100%;
    min-height: 700px;
    background-color: #F2F2F2;
    display: flex;
    justify-content: center;
    align-items: center;
    border-color: silver;
    flex-direction: column;
`