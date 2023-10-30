import React from 'react';
import styled from 'styled-components';

const Overlay = styled.div`
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, .5);
    z-index: 20;
`;

const Modal = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    background-color: #fff;
    width: 600px;
    height: 600px;
`;

const Banner = styled.div`
    width: 100%;
    height: 200px;
    background-image: url(${({img}) => img});
    background-size: cover;
    background-position: center;
    margin-bottom: 20px;
`;

const Text = styled.p`
    font-family: 'Pacifico';
    font-size: 30px;
    text-align: center;
`;

const Btn = styled.button`
    background-color: #299D01;
    font-size: 21px;
    border: none;
    color: white;
    width: 250px;
    height: 65px;
`;

const TextBlock = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;


export const ModalItem = ({ openItem, setOpenItem }) => {

    function closeModal(e) {
        if (e.target.id === 'overlay') {
            setOpenItem(null);
        }
    }
    
    if (!openItem) return null;

    return (
        <Overlay id="overlay" onClick={closeModal}> 

            <Modal>
                <Banner img={openItem.img}/>
                <TextBlock>
                    <Text>{openItem.name} {openItem.price.toLocaleString('ru-RU',
                    {style: 'currency', currency: 'RUB'})}</Text>
                    <Btn>Добавить</Btn>
                </TextBlock>
            </Modal>

    </Overlay>
    )
};