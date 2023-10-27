// helper function for api calls
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../../Api';

// this is action to dispatch
export const fetchTodos = createAsyncThunk(
    'fetchTodos',
    async (payload) => {
        const response = await fetch(api.config.fetchTodos(payload.url), api.http.getNoAuth())
        const result = await api.afterFetchHandlers.parseContent(response, api.http.getNoAuth());
        return result
    }
);


// initial state for reducers
const INITIAL_STATE = {
    isLoading: false,
    isError: false,
    response: null,
    errorResponse: null
}

// actual reducers configuration
const todoSlice = createSlice({
    name: "todo",
    initialState: INITIAL_STATE,
    extraReducers: (builder) => {
        builder.addCase(fetchTodos.pending, (state, action) => {
            state.isLoading = true;
        })
        builder.addCase(fetchTodos.fulfilled, (state, action) => {
            state.isLoading = false;
            state.response = action.payload;
        })
        builder.addCase(fetchTodos.rejected, (state, action) => {
            state.isError = true;
            state.isLoading = false;
            state.errorResponse = action.payload;
        })
    }
});


// export the reducers by default
export default todoSlice.reducer;