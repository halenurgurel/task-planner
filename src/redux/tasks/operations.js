import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const tasksApi = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
});

export const fetchTasks = createAsyncThunk(
  "tasks/fetchAll",
  async (_, thunkAPI) => {
    try {
      const response = await tasksApi.get("/tasks");
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

export const addTask = createAsyncThunk(
  "tasks/addTask",
  async (newTask, thunkAPI) => {
    try {
      const response = await tasksApi.post("/tasks", newTask);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

export const deleteTask = createAsyncThunk(
  "tasks/deleteTask",
  async (id, thunkAPI) => {
    try {
      const response = await tasksApi.delete(`/tasks/${id}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

export const updateTask = createAsyncThunk(
  "tasks/updateTask",
  async ({ id, ...updates }, thunkAPI) => {
    try {
      const response = await tasksApi.put(`/tasks/${id}`, updates);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

export const toggleTaskStatus = createAsyncThunk(
  "tasks/toggleStatus",
  async ({ id, completed }, thunkAPI) => {
    try {
      const response = await tasksApi.put(`/tasks/${id}`, { completed });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);
