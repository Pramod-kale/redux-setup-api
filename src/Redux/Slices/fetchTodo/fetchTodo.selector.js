// improt library components
import { createSelector } from "reselect";

// create a base selector for reducers
const selectFetchTodoStore = state => state.todoReducer;


//  create a individual reducer for every state
export const selectFetchTodo = createSelector(
    [selectFetchTodoStore],
    (todoStore) => todoStore.response
)

export const selectFetchTodoLoading = createSelector(
    [selectFetchTodoStore],
    (todoStore) => todoStore.isLoading
)

