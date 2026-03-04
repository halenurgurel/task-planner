import { createSlice } from "@reduxjs/toolkit";
import {
  fetchTasks,
  addTask,
  deleteTask,
  updateTask,
  toggleTaskStatus,
} from "./operations";
//This slice will manage adding, deleting, and changing the status (completed/incomplete) of tasks.

//Denemek için initialState'i dolduruyoruz, daha sonra sileceğiz
const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

const slice = createSlice({
  name: "tasks",
  initialState,
  extraReducers: (builder) => {
    builder
      //fetchTasks
      .addCase(fetchTasks.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchTasks.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(fetchTasks.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      //addTask
      .addCase(addTask.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addTask.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items.push(action.payload);
      })
      .addCase(addTask.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      //Delete Task
      .addCase(deleteTask.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteTask.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = state.items.filter((task) => task.id !== action.payload.id);
      })
      .addCase(deleteTask.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      //updateTask
      .addCase(updateTask.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateTask.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        const index = state.items.findIndex((t) => t.id === action.payload.id);
        if (index !== -1) state.items[index] = action.payload;
      })
      .addCase(updateTask.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      //toggleTaskStatus
      .addCase(toggleTaskStatus.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(toggleTaskStatus.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        const task = state.items.find((t) => t.id === action.payload.id);
        if (task) {
          task.completed = action.payload.completed;
        }
      })
      .addCase(toggleTaskStatus.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export default slice.reducer;
