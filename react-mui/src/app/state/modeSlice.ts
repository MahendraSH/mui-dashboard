import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "@/app/store";

// Define a type for the slice state

export interface modeType {
  mode: "dark" | "light" | undefined;
}

// Define the initial state using that type
const initialState: modeType = {
  mode: "dark",
};

export const modeSlice = createSlice({
  name: "modeData",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setMode: (state) => {
      state.mode = state.mode === "dark" ? "light" : "dark";
    },
    setDefaultMode: (state) => {
      state.mode = initialState.mode;
    },
  },
});

export const { setMode, setDefaultMode } = modeSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectMode = (state: RootState) => state.mode.mode;

export default modeSlice.reducer;
