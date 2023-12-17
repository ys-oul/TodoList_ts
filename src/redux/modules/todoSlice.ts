import { createSlice } from "@reduxjs/toolkit";

const name = "todos";

interface StateType {
  todos: Todo[];
}

const initialState: StateType = {
  todos: [],
};

export const counterSlice = createSlice({
  name,
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todos.push(action.payload);
    },
    updateTodo: (state, action) => {
      const todo = state.todos.find(
        (todo) => todo.id === action.payload
      ) as Todo;
      todo.isDone = !todo.isDone;
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const { addTodo, deleteTodo, updateTodo } = counterSlice.actions;

export default counterSlice.reducer;
