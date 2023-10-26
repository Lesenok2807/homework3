import React from 'react';
import styled from 'styled-components';
import logoImg from '../image/logo.svg';
import signImg from '../image/sign.svg';

 const NavBarStyled = styled.header`
    position: flex;
    top: 0;
    left: 0;
    z-index: 999;
    height: 80px;
    widht: 100vw;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px;
    background-color: #299B01;
    color: white;
 `;

 const Logo =  styled.div`
    display: flex;
    align-items: center;
 `;

 const H1 = styled.h1`
    font-size: 24px;
    margin-left: 15px;
 `;

 const ImgLogo = styled.img`
    widht: 50px;
 `;

 const Account = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
 `;

 const SignImg = styled.img`
    height: 32px;
    widght: 32px;
    margin-bottom: 5px;
 `;

 const Btn = styled.button`
    border: none;
    background-color: #299B01;
    color: white;
    font-size: 18px;
 `;

 export const NavBar = () => (
    <NavBarStyled>
        <Logo>
            <ImgLogo src={logoImg} alt="logo" />
            <H1>MrDonald's</H1>
        </Logo>        
        <Account>
            <SignImg src={signImg} alt="sign" />
            <Btn>войти</Btn>
        </Account>
    </NavBarStyled>
 );
    