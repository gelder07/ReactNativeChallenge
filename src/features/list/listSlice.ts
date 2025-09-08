import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { getElementsByApi } from '../../services/elementsService';
import { ListItem } from '../../types/list';

export const fetchList = createAsyncThunk(
  'list/fetchList',
  async (_, { rejectWithValue }) => {
    try {
      const data = await getElementsByApi();
      return data;
    } catch (error) {
      return rejectWithValue('Failed to fetch list');
    }
  }
);

interface ListState {
  items: ListItem[];
  loading: boolean;
  error: string | null | unknown;
}

const initialState: ListState = {
  items: [],
  loading: false,
  error: null,
};

const listSlice = createSlice({
  name: 'list',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchList.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchList.fulfilled, (state, action: PayloadAction<ListItem[]>) => {
        state.loading = false;
        state.items = action.payload.reverse();
      })
      .addCase(fetchList.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default listSlice.reducer;
