import React from "react";
import styled from "styled-components";

const ToppingWrap = styled.div`
    max-width: 500px;
    margin: 0 auto;
    column-count: 2;
    column-gap: 5px;
    color: black;

`;

const ToppingLable = styled.label`
    cursor: pointer;
    display: block;
    
`;

const ToppingCheckbox = styled.input`
    cursor: pointer;
    margin-right: 5px;

`;

export const Toppings = ({ toppings, checkToppings }) => {
    return (
        <div>
            <h3>Добавки:</h3>
            <ToppingWrap>
                {toppings.map((item, i) => (
                    <ToppingLable key={i}>
                        <ToppingCheckbox 
                            type="checkbox"
                            checked={item.checked}
                            onChange={() => checkToppings(i)} 
                        />
                        {item.name}
                    </ToppingLable>
                ))}
                
            </ToppingWrap>
        </div>
        
    )
}