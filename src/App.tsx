import React from 'react';
import './App.css';
import {StaticRenderCounter} from './components/StaticRenderCounter';


function App() {

    // useEffect(() => {
    //     let maxValueString = localStorage.getItem('maxValue')
    //     let startValueString = localStorage.getItem('startValue')
    //
    //     if (maxValueString) {
    //         let newMaxValue = JSON.parse(maxValueString);
    //         dispatchSetMaxValue(setMaxValueAC(newMaxValue));
    //     } else {
    //         console.log('No maxValue found in localStorage');
    //     }
    //
    //     // if (maxValueString) {
    //     //     let newMaxValue = JSON.parse(maxValueString)
    //     //     // setMaxValue(+newMaxValue)
    //     //     dispatchSetMaxValue(setMaxValueAC())
    //     // }
    //
    //     if (startValueString) {
    //         let newStartValue = JSON.parse(startValueString)
    //         setStartValue(+newStartValue)
    //     }
    // }, [])

    // useEffect(() => {
    //     localStorage.setItem('maxValue', JSON.stringify(maxValue))
    // }, [maxValue])
    //
    // useEffect(() => {
    //     localStorage.setItem('startValue', JSON.stringify(startValue))
    // }, [startValue])


    return (
        <>
            <StaticRenderCounter
            />

            {/*<ConditionalRenderCounter*/}
            {/*    maxValueCounter={maxValueCounter}*/}
            {/*    startValueCounter={startValueCounter}*/}
            {/*    count={count}*/}
            {/*    setCount={setCount}*/}
            {/*    hasError={hasError}*/}
            {/*    setDisabled={setDisabled}*/}
            {/*    maxValue={maxValue}*/}
            {/*    startValue={startValue}*/}
            {/*    setHasError={setHasError}*/}
            {/*    changeMaxValue={changeMaxValue}*/}
            {/*    changeStartValue={changeStartValue}*/}
            {/*    disabled={disabled}*/}
            {/*    setCounterValue={setCounterValue}*/}
            {/*/>*/}
        </>
    )
}

export default App;

