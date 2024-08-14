import React, {useState} from 'react';
import styled from 'styled-components';

type ButtonType = {
    name: string
    onClick: () => void
    disabled?: boolean
}

export const Button = ({name, onClick, disabled}: ButtonType) => {

    return (
        <StyledButton type={'button'} onClick={onClick} disabled={disabled}>{name}</StyledButton>
    );
};

const StyledButton = styled.button`
  width: 100px;
  height: 40px;
  font-size: 25px;
  border: 1px solid #6464ce;
  border-radius: 5px;
  background-color: #6464ce;
`
