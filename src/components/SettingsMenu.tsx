import React, {ChangeEvent} from 'react';
import styled from 'styled-components';
import {Button} from './Button';
import {useDispatch, useSelector} from 'react-redux';
import {
    setCountAC,
    setDisabledAC,
    setHasErrorAC,
    setMaxValueAC,
    setMaxValueCounterAC,
    setStartValueAC,
    setStartValueCounterAC
} from '../redax/stateReduser';
import {RootState} from '../redax/store';

export type SettingsMenuType = {
    hasError: boolean
    disabled: boolean
    isConditionalRenderingClick?: () => void
}

export const SettingsMenu = ({
                                 hasError,
                                 disabled,
                                 isConditionalRenderingClick
                             }: SettingsMenuType) => {


    const regex = /^\d*$/;
    const dispatch = useDispatch()
    const maxValue = useSelector<RootState, number>(state => state.state?.maxValue)
    const startValue = useSelector<RootState, number>(state => state.state?.startValue)


    const onChangeMaxValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(setHasErrorAC(+e.currentTarget.value < 0 || maxValue <= startValue || !regex.test(e.currentTarget.value)));
        dispatch(setMaxValueAC(+e.currentTarget.value))
        // dispatch(MaxValueTC(+e.currentTarget.value))  //перенес в store
    }

    const onChangeStartValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        if (+e.currentTarget.value < 0 || startValue >= maxValue || !regex.test(e.currentTarget.value)) {
            dispatch(setHasErrorAC(true));
            return
        }
        dispatch(setStartValueAC(+e.currentTarget.value))
        dispatch(setHasErrorAC(false));
        // dispatch(StartValueTC(+e.currentTarget.value))  //перенес в store
    }

    const onSetHandler = () => {
        dispatch(setStartValueCounterAC(startValue));
        dispatch(setMaxValueCounterAC(maxValue));
        dispatch(setCountAC(startValue))
        dispatch(setDisabledAC(true));
        click()
    }

    const click = () => {
        isConditionalRenderingClick?.()
    }

    return (
        <StyledSettingsMenu>
            <SettingsMenuDisplay>
                <StyledForm>
                    <FieldLabel>
                        max value:
                        <Field type={'number'}
                               value={maxValue}
                               hasError={hasError}
                               onChange={onChangeMaxValueHandler}/>
                    </FieldLabel>
                    <FieldLabel>
                        start value:
                        <Field type={'number'}
                               value={startValue}
                               hasError={hasError}
                               onChange={onChangeStartValueHandler
                               }/>
                    </FieldLabel>
                </StyledForm>

            </SettingsMenuDisplay>
            <ButtonBlock>
                <Button
                    name={'set'}
                    onClick={onSetHandler}
                    disabled={disabled}/>
            </ButtonBlock>
        </StyledSettingsMenu>
    );
};


const StyledSettingsMenu = styled.div`
  width: 400px;
  height: 300px;
  border: 1px solid #6464ce;
  border-radius: 10px;
  background-color: #fff;
  padding: 10px;
`

const SettingsMenuDisplay = styled.div`
  display: flex;
  align-items: center;
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

const StyledForm = styled.form`
  display: flex;
  //width: 100px;
  flex-direction: column;
  gap: 30px;
  padding: 20px;
`

const FieldLabel = styled.label`
  display: flex;
  //flex-direction: row;
  width: 100%;
  color: #6464ce;
  font-weight: bold;
  gap: 20px;
  //justify-content: space-around;
`

const Field = styled.input<{ hasError: boolean }>`
  text-align: center;
  border: 1px solid ${props => props.hasError ? 'red' : '#6464ce'};
  background-color: ${props => props.hasError ? '#ffe6e6' : 'white'};
  color: ${props => props.hasError ? 'red' : '#6464ce'};
`