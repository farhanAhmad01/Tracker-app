import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { todoTrackerTodosServices } from "../services/todosServices";
import {
  pushErrorNotification,
  pushSuccessNotification,
} from "../utils/pushNotification";

export const reterieveAllTodos = createAsyncThunk(
  "todoTracker/todos/reterieve",
  async (userId, { rejectWithValue }) => {
    try {
      const todos = await todoTrackerTodosServices.getAllTodos(userId);


      if (todos.length === 0) {
        pushErrorNotification("You have no todos yet!");
      } else {
        pushSuccessNotification("All Todos loaded successfully!");
      }
      return todos;
    } catch (error) {
      return rejectWithValue(error.message || "Failed to retrieve todos");
    }
  }
);

export const addTodo = createAsyncThunk(
  "todoTracker/todos/addTodo",
  async (data, { rejectWithValue }) => {
    try {
      const todo = await todoTrackerTodosServices.addTodo(data);
      pushSuccessNotification("Todo added to the list!");
      return todo;
    } catch (error) {
      return rejectWithValue(error.message || "Failed to add todo");
    }
  }
);

export const deleteTodo = createAsyncThunk(
  "todoTracker/todos/deleteTodo",
  async (todoId, { rejectWithValue }) => {
    try {
      const id = await todoTrackerTodosServices.deleteTodo(todoId);
      pushSuccessNotification("Todo deleted from the list!");
      return { id };
    } catch (error) {
      return rejectWithValue(error.message || "Failed to delete todo");
    }
  }
);

export const editTodoById = createAsyncThunk(
  "todoTracker/todos/editTodo",
  async (data, { rejectWithValue }) => {
    try {
      const edittodo = await todoTrackerTodosServices.editTodo(data);
      pushSuccessNotification("Todo edited from the list!");
      return edittodo;
    } catch (error) {
      return rejectWithValue(error.message || "Failed to edit todo");
    }
  }
);

const todoSlice = createSlice({
  name: "todo",
  initialState: {
    todos: [],
    searchKey: "",
  },

  reducers: {
    searchTodo(state, action) {
      state.searchKey = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(reterieveAllTodos.fulfilled, (state, action) => {
        state.todos = action.payload;
      })
      .addCase(reterieveAllTodos.rejected, (state, action) => {
        console.log(action)
        // state.todos = action.payload;
      })
      .addCase(addTodo.fulfilled, (state, action) => {
        state.todos = [...state.todos, action.payload];
      })
      .addCase(deleteTodo.fulfilled, (state, action) => {
        state.todos = state.todos.filter((todo) => todo.id !== action.payload.id);
      })
      .addCase(editTodoById.fulfilled, (state, action) => {
        state.todos = state.todos.map((todo) =>
          todo.id === action.payload.id ? action.payload : todo
        );
      });
  },
});

export const { searchTodo } = todoSlice.actions;

export const todosSelector = (state) => state.todo;
export default todoSlice.reducer;
