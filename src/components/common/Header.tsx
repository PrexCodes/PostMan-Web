import React from 'react'
import styled from 'styled-components'
import post from '../../assets/postman-icon.png'
import {BsChevronDown, BsSearch} from 'react-icons/bs'
import {AiOutlineSearch} from 'react-icons/ai'
import Button1 from '../static/Button1'
import Button2 from '../static/Button2'
import {NavLink} from "react-router-dom"

const Header = () => {
  return (
    <div>
        <Container>
            <Main>
                <LogoPart>
                    <Logo src={post}/>
                    <NavHolder>
                    <Nav> Product 
                        <IconDown/>
                    </Nav>
                    <Nav> Pricing </Nav>
                    <Nav> Enterprise <IconDown/> </Nav>
                    <Nav> Resource and Support <IconDown/></Nav>
                    <Nav> Explore  </Nav>
                    </NavHolder>
                </LogoPart>
                <SearchBar>
                    <Sbar/>
                    <Stext placeholder='Search Postman'/>
                </SearchBar>
                <ButtonHolder>
                    <NavLinks to={"login"}>
                    <Button2 bor={'1px solid lightgray'} col={'black'} bg={'#ffffff'} hbg={'#f9f9f7'} des={'Sign In'}/>
                    </NavLinks>
                   <NavLinks to={"signup"}>
                   <Button1 col={'white'} bg={'#FF6C37'} hbg={'#E05320'} des={'Sign Up for Free'} styles={{borderRadius: '5px'}}/>
                   </NavLinks>
                </ButtonHolder>
            </Main>
        </Container>
    </div>
  )
}

const NavLinks = styled(NavLink)`
text-decoration: none;

`
const Sbar = styled(BsSearch)`
margin-right: 5px;
font-size: 13px;
`
const NavHolder = styled.div`
display: flex;
`
const Container = styled.div`
height: 45px;
width: 100%;
display: flex;
justify-content: center;
align-items: center;
position: fixed;
background-color: white;
z-index: 5;
`
const Main = styled.div`
display: flex;
width: 98%;
justify-content: space-between;
align-items: center;
`
const Stext = styled.input`

outline: none;
border: none;
background-color: transparent;
width: 49%;
font-size: 12.5px;

`
const SearchBar = styled.div`
height: 35px;
width: 190px;
background-color: #F2F2F2;
display: flex;
justify-content: center;
align-items: center;
color: #6B6B6B;
border-radius: 5px;

:hover{
    border: 1px solid #6B6B6B;
    cursor: pointer;
}
`

const ButtonHolder = styled.div`
display: flex;
`
const Logo = styled.img`
height: 30px;
margin-right: 10px;
`
const LogoPart = styled.div`
display: flex;
align-items: center;
`

const IconDown = styled(BsChevronDown)`
font-size: 12px;
margin-top: 2.5px;
margin-left: 2px
`
const Nav = styled.div`
display: flex;
align-items: center;
margin-right: 30px;
font-size: 14px;
color: #6B6B6B;
cursor: pointer;
font-weight: 600;
transition: all 300ms;
:hover{
    color: black
}

`



export default Header