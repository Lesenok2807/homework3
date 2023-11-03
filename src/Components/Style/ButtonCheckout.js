import styled from 'styled-components';

export const ButtonCheckout = styled.button`
    display: block;
    margin: 0 auto;
    background-color: #299D01;
    font-size: inherit;
    font-family: inherit;
    border-color: transparent;
    color: #fff;
    width: 250px;
    height: 65px;
    cursor: pointer;
    transition-property: color, background-color, border-color;
    transition-duration: .3s;
    &:hover {
        background-color: #fff;
        color: #299D01;
        border-color: #299D01;
    }
`;