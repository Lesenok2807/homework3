import React from "react";
import styled from "styled-components";

const ChoiceWrap = styled.div`
    max-width: 500px;
    margin: 0 auto;
    column-count: 2;
    column-gap: 5px;
    color: black;
`;

const ChoiceRadio = styled.input`
    cursor: pointer;
    margin-right: 5px;
`;

const ChoiceLable = styled.label`
    cursor: pointer;
    display: block;
`;

export const Choices = ({ openItem, choice, changeChoices }) => {

    return (
        <>
            <h3>Выбирайте:</h3>
            <ChoiceWrap>
                {openItem.choices.map((item, i) => (
                    <ChoiceLable key={i}>
                        <ChoiceRadio 
                            type="radio"
                            name="choices"
                            checked={choice === item}
                            value={item}
                            onChange={changeChoices} 
                        />
                        {item}
                    </ChoiceLable>
                ))}                
            </ChoiceWrap>
        </>
    )
}