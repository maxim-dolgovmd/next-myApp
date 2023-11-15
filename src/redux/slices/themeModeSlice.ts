import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface initialStateType {
    modeTheme: string;
};

type PayloadActionType = 'dark' | 'light'

const initialState: initialStateType = {
    modeTheme: 'dark',
};

export const ThemeModeSlice = createSlice({
    name: "mode",
    initialState,
    reducers: {
        // reset: () => initialState,
        setModeTheme: (state, action: PayloadAction<any>) => {
            state.modeTheme = action.payload
        }
    },
});

export const {
    setModeTheme,
    // reset,
} = ThemeModeSlice.actions;

// export const ModeBodySelector = (state: RootState) => state.mode.modeBodyActive

export default ThemeModeSlice.reducer;
