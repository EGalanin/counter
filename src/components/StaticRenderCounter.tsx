import {Counter, CounterType} from './Counter';
import {SettingsMenu, SettingsMenuType} from './SettingsMenu';
import React from 'react';
import styled from 'styled-components';

type StaticRenderCounterType = CounterType & SettingsMenuType;

export const StaticRenderCounter = ({
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
                                    }: StaticRenderCounterType) => {

    return (
        <CounterWrapper >
            <SettingsMenu
                maxValue={maxValue}
                startValue={startValue}
                hasError={hasError}
                changeMaxValue={changeMaxValue}
                changeStartValue={changeStartValue}
                setHasError={setHasError}
                disabled={disabled}
                setDisabled={setDisabled}
                setCounterValue={setCounterValue}
            />
            <Counter
                maxValueCounter={maxValueCounter}
                startValueCounter={startValueCounter}
                count={count}
                setCount={setCount}
                hasError={hasError}
                setDisabled={setDisabled}
            />
        </CounterWrapper>)
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
