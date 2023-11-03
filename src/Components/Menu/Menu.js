import React from 'react';
import styled from 'styled-components';
import dbMenu from '../DBMenu';
import { ListItem } from '../Menu/ListItem';
import { BannerMenu } from '../Menu/Banner';

const MenuStyled = styled.main`    
    background-color: #ccc;  
    margin-left: 380px;   
`;

const SectionMenu = styled.section`
    padding: 30px;
`;

export const Menu = ({ setOpenItem }) => (
    <MenuStyled>
        <BannerMenu />
        <SectionMenu>
            <h2>Бургеры</h2>
            <ListItem 
                itemList={dbMenu.burger}
                setOpenItem={setOpenItem}
            />
        </SectionMenu>

        <SectionMenu>
            <h2>Закуски / Напитки</h2>
            <ListItem 
                itemList={dbMenu.other}
                setOpenItem={setOpenItem}
            />
        </SectionMenu>
    </MenuStyled>
);