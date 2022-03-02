import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../app/store';

export interface AppState {
  roomId: string | null;
  roomName: string | null;
}

const initialState: AppState = {
  roomId: null,
  roomName: null,
};

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    enterRoom: (state, action: PayloadAction<{ roomId: string, roomName: string }>) => {
      state.roomId = action.payload.roomId;
      state.roomName = action.payload.roomName;
    }
  },
});

export const { enterRoom } = appSlice.actions;

export const selectRoom = ({ app: { roomId, roomName } }: RootState) => ({ roomId, roomName });

export default appSlice.reducer;
