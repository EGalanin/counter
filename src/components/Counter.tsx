import React from 'react';
import styled from 'styled-components';
import {Button} from './Button';
import {useDispatch, useSelector} from 'react-redux';
import {setCountAC, setDisabledAC} from '../redax/stateReduser';
import {RootState} from '../redax/store';

export type CounterType = {
    hasError: boolean
    onClick?: () => void
}

export const Counter = ({
                            hasError,
                            onClick
                        }: CounterType) => {

    const startValueCounter = useSelector<RootState, number>(state => state.state?.startValueCounter)
    const maxValueCounter = useSelector<RootState, number>(state => state.state?.maxValueCounter)
    const count = useSelector<RootState, number>(state => state.state?.count)
    const dispatch = useDispatch()

    const disabled = count === maxValueCounter

    const onClickIncHandler = () => {
        const newValue = count + 1
        dispatch(setCountAC(newValue));
    }

    const onClickResetHandler = () => {
        dispatch(setCountAC(startValueCounter));
        dispatch(setDisabledAC(false));
        onClick?.();
    }

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




