import {Dispatch} from 'redux';

export type StateType= {
    maxValue: number
    startValue: number
    startValueCounter: number
    maxValueCounter: number
    count: number
    hasError: boolean
    disabled: boolean
}

const initialState: StateType = {
    maxValue:0,
    startValue: 0,
    startValueCounter: 0,
    maxValueCounter: 0,
    count: 0,
    hasError: false,
    disabled: false
}

type ActionsType = ReturnType<typeof setMaxValueAC>
    | ReturnType<typeof setStartValueAC>
    | ReturnType<typeof setStartValueCounterAC>
    | ReturnType<typeof setMaxValueCounterAC>
    | ReturnType<typeof setCountAC>
    | ReturnType<typeof setHasErrorAC>
    | ReturnType<typeof setDisabledAC>

export const stateReducer = (state: StateType = initialState, action: ActionsType): StateType=> {
    switch (action.type) {
        case 'SET_MAX_VALUE':
            return {...state, maxValue: action.payload};
        case 'SET_START_VALUE':
            return {...state, startValue: action.payload}
        case 'SET_START_VALUE_COUNTER':
            return {...state, startValueCounter: action.payload}
        case 'SET_MAX_VALUE_COUNTER':
            return {...state, maxValueCounter: action.payload}
        case 'SET_COUNT':
            return {...state, count: action.payload}
        case 'SET_HAS_ERROR':
            return {...state, hasError: action.payload}
        case 'SET_DISABLED':
            return {...state, disabled: action.payload}
        default:
            return state;
    }
};

export const setMaxValueAC = (newMaxValue:number) => {
    return {
        type: 'SET_MAX_VALUE',
        payload:newMaxValue
    } as const
}

export const setStartValueAC = (newStartValue:number) => {
    return {
        type: 'SET_START_VALUE',
        payload:newStartValue
    } as const
}

export const setStartValueCounterAC = (newStartValueCounter:number) => {
    return {
        type: 'SET_START_VALUE_COUNTER',
        payload:newStartValueCounter
    } as const
}

export const setMaxValueCounterAC = (newMaxValueCounter:number) => {
    return {
        type: 'SET_MAX_VALUE_COUNTER',
        payload:newMaxValueCounter
    } as const
}

export const setCountAC = (newStartValue:number) => {
    return {
        type: 'SET_COUNT',
        payload:newStartValue
    } as const
}

export const setHasErrorAC = (value: boolean) => {
    return {
        type: 'SET_HAS_ERROR',
        payload: value
    } as const
}

export const setDisabledAC = (value: boolean) => {
    return {
        type: 'SET_DISABLED',
        payload: value
    } as const
}

// export const StartValueTC = (newStartValue:number) => (dispatch: Dispatch) => {
//     localStorage.setItem('startValue', JSON.stringify(newStartValue))
//     dispatch(setStartValueAC(newStartValue))
// }
//
// export const MaxValueTC = (newMaxValue:number) => (dispatch: Dispatch) => {
//     localStorage.setItem('maxValue', JSON.stringify(newMaxValue))
//     dispatch(setStartValueAC(newMaxValue))
// }





