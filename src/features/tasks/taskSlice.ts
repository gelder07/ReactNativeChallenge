import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { addElementByApi } from '../../services/elementsService';
import { Task } from '../../types/task';
import { ListItem } from '../../types/list';

export const addTask = createAsyncThunk(
  'tasks/addTask',
  async (description: string, { rejectWithValue }) => {
    try {
      const data = await addElementByApi(description);
      return data;
    } catch (error) {
      return rejectWithValue('Failed to add task');
    }
  }
);

interface TasksState {
  tasks: Task[];
  loading: boolean;
  error: string | null | unknown;
}

const initialState: TasksState = {
  tasks: [],
  loading: false,
  error: null,
};

const taskSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTaskLocally: (state, action: PayloadAction<{ description: string }>) => {
      if (action.payload.description.trim() === '') {
        return;
      }
      const newTask: Task = {
        id: new Date().toISOString(),
        description: action.payload.description,
      };
      state.tasks.unshift(newTask);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(addTask.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addTask.fulfilled, (state, action: PayloadAction<ListItem>) => {
        state.loading = false;
        const newTask: Task = {
          id: action.payload.id,
          description: action.payload.name,
        };
        state.tasks.unshift(newTask);
      })
      .addCase(addTask.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { addTaskLocally } = taskSlice.actions;
export default taskSlice.reducer;
