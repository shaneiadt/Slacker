import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../app/store';

export interface AppState {
  roomId: string | null;
}

const initialState: AppState = {
  roomId: null,
};

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    enterRoom: (state, action: PayloadAction<{ roomId: string }>) => {
      state.roomId = action.payload.roomId;
    }
  },
});

export const { enterRoom } = appSlice.actions;

export const selectRoomId = (state: RootState) => state.app.roomId;

export default appSlice.reducer;
