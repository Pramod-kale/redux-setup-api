// import library components
import { createSelector } from "reselect";

// create a base selector for reducers
const selectCounterStore = state => state.counterSlice;

// create individual reducer for every state
export const selectCounter = createSelector(
    [selectCounterStore],
    (counterSlice) => counterSlice.count
)