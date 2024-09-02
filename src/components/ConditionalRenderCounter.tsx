import React, {useState} from 'react';
import {Counter, CounterType} from './Counter';
import {SettingsMenu, SettingsMenuType} from './SettingsMenu';
import styled from 'styled-components';

type ConditionalRenderCounterType = CounterType & SettingsMenuType;

export const ConditionalRenderCounter = ({
                                             maxValue,
                                             startValue,
                                             hasError,
                                             changeMaxValue,
                                             changeStartValue,
                                             setHasError,
                                             disabled,
                                             setDisabled,
                                             setCounterValue,
                                             maxValueCounter,
                                             startValueCounter,
                                             count,
                                             setCount
                                         }: ConditionalRenderCounterType) => {

    const [showSettings, setShowSettings] = useState(false)

    const onclick = () => {
        setShowSettings(!showSettings)
    }

    return (
        <CounterWrapper>
            {showSettings ? (
                <div><SettingsMenu
                    maxValue={maxValue}
                    startValue={startValue}
                    hasError={hasError}
                    changeMaxValue={changeMaxValue}
                    changeStartValue={changeStartValue}
                    setHasError={setHasError}
                    disabled={disabled}
                    setDisabled={setDisabled}
                    setCounterValue={setCounterValue}
                    isConditionalRenderingClick={onclick}
                /></div>
            ) : (
                <div><Counter
                    maxValueCounter={maxValueCounter}
                    startValueCounter={startValueCounter}
                    count={count}
                    setCount={setCount}
                    hasError={hasError}
                    setDisabled={setDisabled}
                    onClick={onclick}
                /></div>
            )}
        </CounterWrapper>
    )
}

const CounterWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 30px;
  width: 100%;
  height: 50vh;
`