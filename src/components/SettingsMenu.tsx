import React, {ChangeEvent, useState} from 'react';
import styled from 'styled-components';
import {Button} from './Button';

type SettingsMenuType = {
    maxValue: number
    startValue: number
    hasError: boolean
    setHasError: (value: boolean) => void
    // changeMaxValue: (value: string) => void
    // changeStartValue: (value: string) => void
    disabledButton: () => void
    settingsHandler: (startValue: number, maxValue: number) => void
}

export const SettingsMenu = ({
                                 maxValue,
                                 startValue,
                                 hasError,
                                 setHasError,
                                 // changeMaxValue,
                                 // changeStartValue,
                                 disabledButton,
                                 settingsHandler
                             }: SettingsMenuType) => {

    const [startValue_, setStartValue] = useState(startValue)
    const [maxValue_, setMaxValue] = useState(maxValue)

    const onChangeMaxValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        if (+e.currentTarget.value < 0) { //|| maxValue_ <= startValue_
            setHasError(true);
            return;
        }
        setMaxValue(+e.currentTarget.value)
        setHasError(false);
    }

    const onChangeStartValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        if (+e.currentTarget.value < 0 || startValue_ >= maxValue_) {
            setHasError(true);
            return
        }
        setStartValue(+e.currentTarget.value)
        setHasError(false);
    }

    const onSetHandler = () => {
        settingsHandler(startValue_, maxValue_)
        disabledButton()
    }

    return (
        <StyledSettingsMenu>
            <SettingsMenuDisplay>
                <StyledForm>
                    <FieldLabel>
                        max value:
                        <Field type={'number'}
                               value={maxValue_}
                               hasError={hasError}
                               onChange={onChangeMaxValueHandler}/>
                    </FieldLabel>
                    <FieldLabel>
                        start value:
                        <Field type={'number'}
                               value={startValue_}
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
                    disabled={false}/>
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

const Field = styled.input<{hasError: boolean}>`
  text-align: center;
  border: 1px solid ${props => props.hasError ? 'red' : '#6464ce'};
  background-color: ${props => props.hasError ? '#ffe6e6' : 'white'};
  color: ${props => props.hasError ? 'red' : '#6464ce'};
`