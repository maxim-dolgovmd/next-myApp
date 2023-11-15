'use client'

import { darkTheme, lightTheme } from '@/components/theme/theme'
import React, { createContext, useState } from 'react'
import {ThemeProvider} from 'styled-components'
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { setModeTheme } from '@/redux/slices/themeModeSlice';
import ComponentDidMount from '@/utils/componentDidMount';

export interface ModeContextType {
    mode: string
    toggle: () => void
}

export const ThemeContext = createContext<ModeContextType | null>(null)

export const ThemeProviderMode = ({children}: any) => {

    // const dispatch = useAppDispatch()
    // const {modeTheme} = useAppSelector((state) => state.mode)
    // console.log(modeTheme)

    const [mode, setMode] = useState('dark')
    const toggle = () => setMode((prev: string): 'dark' | 'light' => prev === 'light' ? 'dark' : 'light')
    ComponentDidMount(mode)

    return (
        <ThemeContext.Provider value={{mode, toggle}}>
            <ThemeProvider theme={mode === 'dark' ? lightTheme : darkTheme}>
                <div>{children}</div>
            </ThemeProvider>
        </ThemeContext.Provider>
    )
}