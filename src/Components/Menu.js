import React from 'react';
import styled from 'styled-components';
import dbMenu from './DBMenu';
import { ListItem } from './ListItem';
import bannerMenu from '../image/banner.png';

const MenuStyled = styled.main`
    background-color: #ccc;   
`;

const SectionMenu = styled.section`
    padding: 30px;
`;

const BannerMenu = styled.img`
    width: 100%;
`;

export const Menu = () => (
    <MenuStyled>
        <BannerMenu src={bannerMenu} alt='banner' />
        <SectionMenu>
            <h2>Бургеры</h2>
            <ListItem itemList={dbMenu.burger} />
        </SectionMenu>

        <SectionMenu>
            <h2>Закуски / Напитки</h2>
            <ListItem itemList={dbMenu.other} />
        </SectionMenu>
    </MenuStyled>
);