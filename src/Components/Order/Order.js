import React from 'react';
import styled from 'styled-components';
import { ButtonCheckout } from '../Style/ButtonCheckout';
import { OrderListItem } from '../Order/OrderListItem';
import { totalPriceItems } from '../Functions/secondaryFunction';
import { formatCurrency } from '../Functions/secondaryFunction';

const OrderStyled = styled.section`
    position: fixed;
    display: flex;
    flex-direction: column;
    top: 110px;
    left: 0;
    background: #fff;
    width: 380px;
    height: calc(100% - 100px);
    box-shadow: 3px 4px 5px rgba(0, 0, 0, .25);
`;

const OrderTitle = styled.h2`
    text-align: center;
`;

const OrderContent = styled.div`
    flex-grow: 1;
`;

const OrderList = styled.ul``;

const Total = styled.div`
    display: flex;
    margin: 0 35px 30px 35px;
    & span:first-child {
        flex-grow: 1;
    }   
`;

const TotalPrice = styled.span`
    text-align: right;
    min-width: 65px;
    margin-left: 20px;
`;

const EmptyList = styled.p`
    text-align: center;
`;

export const Order = ({ orders, setOrders, setOpenItem }) => {

    const deleteItem = index => {
        const newOrders = [...orders];
        newOrders.splice(index, 1);
        setOrders(newOrders);
    };

    const total = orders.reduce((result, order) => 
        totalPriceItems(order) + result, 0);

    const totalCounter = orders.reduce((result, order) => 
        order.count + result, 0);

    return (
        <OrderStyled>
            <OrderTitle>ВАШ ЗАКАЗ</OrderTitle>
            <OrderContent>
                {orders.length ?  
                <OrderList>
                    {orders.map((order, index) => <OrderListItem 
                        key={index}
                        order={order}
                        deleteItem={deleteItem}
                        index={index}
                        setOpenItem={setOpenItem}
                    />)}
                </OrderList> :
                <EmptyList>Список заказоов пуст</EmptyList>}
            </OrderContent>
            <Total>
                <span>ИТОГО</span>
                <span><strong>{totalCounter}</strong></span>
                <TotalPrice>{formatCurrency(total)}</TotalPrice>
            </Total>
            <ButtonCheckout>Оформить</ButtonCheckout>
        </OrderStyled>
    )
};