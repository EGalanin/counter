import React from 'react';
import styled from 'styled-components';
import {Button} from './Button';

export type CounterType = {
    maxValueCounter: number
    startValueCounter: number
    count: number
    setCount: (count: number) => void
    hasError: boolean
    setDisabled: (value: boolean) => void
    onClick?: () => void
}

export const Counter = ({
                            maxValueCounter,
                            startValueCounter,
                            count,
                            setCount,
                            hasError,
                            setDisabled,
                            onClick
                        }: CounterType) => {

    const disabled = count === maxValueCounter

    const onClickIncHandler = () => {
        setCount(count++);
    }

    const onClickResetHandler = () => {
        setCount(startValueCounter);
        setDisabled(false);
        setCount(0);
        onClick?.();
    }

    // setCollapc && setCollapc(false)
    //collapc && !unCollapc ? {} : {display: 'none'}

    return (
        <StyledCounter>
            <CounterDisplay style={disabled ? {color: 'red'} : {color: '#6464ce'}}>
                {hasError ? 'Incorrect value!' : count ? count : `enter values and press 'set'`}
            </CounterDisplay>
            <ButtonBlock>
                <Button
                    name={'inc'}
                    onClick={onClickIncHandler}
                    disabled={disabled}/>
                <Button
                    name={'reset'}
                    onClick={onClickResetHandler}/>
            </ButtonBlock>
        </StyledCounter>
    );
};

const StyledCounter = styled.div`
  width: 400px;
  height: 300px;
  border: 1px solid #6464ce;
  border-radius: 10px;
  background-color: #fff;
  padding: 10px;
`

const CounterDisplay = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  color: #6464ce;
  width: 100%;
  height: 200px;
  border: 1px solid #6464ce;
  border-radius: 10px;
  margin-bottom: 10px;
`

const ButtonBlock = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  width: 100%;
  height: 70px;
  border: 1px solid #6464ce;
  border-radius: 10px;
`




