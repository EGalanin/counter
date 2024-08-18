import React, {ChangeEvent, useEffect, useState} from 'react';

import './App.css';
import {SettingsMenu} from './components/SettingsMenu';
import {Counter} from './components/Counter';
import styled from 'styled-components';

function App() {
    let [maxValue, setMaxValue] = useState<number>(0);
    let [startValue, setStartValue] = useState<number>(0);

    let [startValueCounter, setStartValueCounter] = useState(0);
    let [maxValueCounter, setMaxValueCounter] = useState(0);
    let [count, setCount] = useState(startValueCounter);

    let [hasError, setHasError] = useState<boolean>(false);

    // let disabled = true

    useEffect(() => {
        let maxValueString = localStorage.getItem('maxValue')
        let startValueString = localStorage.getItem('startValue')

        if (maxValueString) {
            let newMaxValue = JSON.parse(maxValueString)
            setMaxValue(+newMaxValue)
        }

        if (startValueString) {
            let newStartValue = JSON.parse(startValueString)
            setStartValue(+newStartValue)
        }
    } , [])


    const changeMaxValue = (value: number) => {
        setMaxValue(value)
        localStorage.setItem('maxValue', JSON.stringify(maxValue))
    }

    const changeStartValue = (value: number) => {
        setStartValue(value)
        localStorage.setItem('startValue', JSON.stringify(startValue))
        setCount(value)
    }

    const disabledButton = () => {
        setMaxValueCounter(maxValue);
        setStartValueCounter(startValue);
        // disabled = true
    }

    return (
        <CounterWrapper>
            <SettingsMenu
                maxValue={maxValue}
                startValue={startValue}
                hasError={hasError}
                changeMaxValue={changeMaxValue}
                changeStartValue={changeStartValue}
                setHasError={setHasError}
                disabledButton={disabledButton}
                // disabled={disabled}
            />
            <Counter
                maxValue={maxValueCounter}
                startValue={startValueCounter}
                count={count}
                setCount={setCount}
                hasError={hasError}
            />
        </CounterWrapper>
    );
}

export default App;

const CounterWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 30px;
  width: 100%;
  height: 100vh;
`