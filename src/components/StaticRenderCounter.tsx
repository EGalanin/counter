import {Counter, CounterType} from './Counter';
import {SettingsMenu, SettingsMenuType} from './SettingsMenu';
import React from 'react';
import styled from 'styled-components';
import {RootState} from '../redax/store';
import {useSelector} from 'react-redux';

export const StaticRenderCounter = () => {

    const hasError = useSelector<RootState, boolean>(state => state.state?.hasError)
    const disabled = useSelector<RootState, boolean>(state => state.state?.disabled)

    return (
        <CounterWrapper >
            <SettingsMenu
                hasError={hasError}
                disabled={disabled}
            />
            <Counter
                hasError={hasError}
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
