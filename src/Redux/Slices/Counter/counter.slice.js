// import library components
import { createSlice } from "@reduxjs/toolkit";


// initialize dfault state
const INITIAL_STATE = {
    count: 0
}

// create a slice 
export const userSlice = createSlice({
    name: 'counter',
    initialState: INITIAL_STATE,
    reducers: {
        setCounter(state, action) {
            return {
                ...state,
                count: action.payload
            }
        },
    }
})


const { setCounter } = userSlice.actions;
const counterSlice = userSlice.reducer;

// export them
export {
    counterSlice,
    setCounter
}