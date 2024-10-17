import {applyMiddleware, combineReducers, legacy_createStore} from 'redux'
import {stateReducer} from './stateReduser';
import {thunk} from 'redux-thunk';

// мы задаём структуру нашего единственного объекта-состояния
const rootReducer = combineReducers({
    state: stateReducer
})

let preloaderState;
const persistedCounterState = localStorage.getItem('app-state');
if (persistedCounterState) {
    preloaderState=JSON.parse(persistedCounterState)
}
// непосредственно создаём store
export const store = legacy_createStore(rootReducer, preloaderState, applyMiddleware(thunk))

// определить автоматически тип всего объекта состояния
export type RootState = ReturnType<typeof store.getState>

store.subscribe( () => {
    localStorage.setItem('app-state', JSON.stringify(store.getState()))
})
