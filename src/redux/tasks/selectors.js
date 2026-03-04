export const selectAllTasks = (state) => state.tasks.items;
export const selectIsLoading = (state) => state.tasks.isLoading;

export const selectUnCompletedTasks = (state) =>
  state.tasks.items.filter((task) => !task.completed);

export const selectCompletedTasks = (state) =>
  state.tasks.items.filter((task) => task.completed);
