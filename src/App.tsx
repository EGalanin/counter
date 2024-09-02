import React, {useEffect, useState} from 'react';
import './App.css';
import styled from 'styled-components';
import {StaticRenderCounter} from './components/StaticRenderCounter';
import {ConditionalRenderCounter} from './components/ConditionalRenderCounter';


function App() {
    const [maxValue, setMaxValue] = useState<number>(0);
    const [startValue, setStartValue] = useState<number>(0);

    const [startValueCounter, setStartValueCounter] = useState<number>(0);
    const [maxValueCounter, setMaxValueCounter] = useState<number>(0);
    const [count, setCount] = useState<number>(0);
    const [hasError, setHasError] = useState<boolean>(false);

    const [disabled, setDisabled] = useState<boolean>(false)

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
    }, [])

    useEffect(() => {
        localStorage.setItem('maxValue', JSON.stringify(maxValue))
    }, [maxValue])

    useEffect(() => {
        localStorage.setItem('startValue', JSON.stringify(startValue))
    }, [startValue])

    const changeMaxValue = (value: number) => {
        setMaxValue(value)
    }

    const changeStartValue = (value: number) => {
        setStartValue(value)
    }

    const setCounterValue = (startValue: number, maxValue: number) => {
        setStartValueCounter(startValue);
        setMaxValueCounter(maxValue);
        setCount(startValue)
    }

    return (
        <>
            <StaticRenderCounter
                maxValueCounter={maxValueCounter}
                startValueCounter={startValueCounter}
                count={count}
                setCount={setCount}
                hasError={hasError}
                setDisabled={setDisabled}
                maxValue={maxValue}
                startValue={startValue}
                setHasError={setHasError}
                changeMaxValue={changeMaxValue}
                changeStartValue={changeStartValue}
                disabled={disabled}
                setCounterValue={setCounterValue}
            />

            <ConditionalRenderCounter
                maxValueCounter={maxValueCounter}
                startValueCounter={startValueCounter}
                count={count}
                setCount={setCount}
                hasError={hasError}
                setDisabled={setDisabled}
                maxValue={maxValue}
                startValue={startValue}
                setHasError={setHasError}
                changeMaxValue={changeMaxValue}
                changeStartValue={changeStartValue}
                disabled={disabled}
                setCounterValue={setCounterValue}
            />
        </>
    )
}

export default App;

