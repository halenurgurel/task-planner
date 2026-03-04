import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

const slice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: {
      reducer(state, action) {
        state.items.push(action.payload);
      },
      prepare(task) {
        return { payload: { ...task, id: nanoid(), completed: false } };
      },
    },
    deleteTask(state, action) {
      state.items = state.items.filter((t) => t.id !== action.payload);
    },
    updateTask(state, action) {
      const index = state.items.findIndex((t) => t.id === action.payload.id);
      if (index !== -1)
        state.items[index] = { ...state.items[index], ...action.payload };
    },
    toggleTaskStatus(state, action) {
      const task = state.items.find((t) => t.id === action.payload.id);
      if (task) task.completed = action.payload.completed;
    },
  },
});

export const { addTask, deleteTask, updateTask, toggleTaskStatus } =
  slice.actions;
export default slice.reducer;
