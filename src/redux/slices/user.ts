import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface UserData {
    name: string;
    email: string;
    password: string;
}

const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: {
      name: '',
      email: '',
      password: ''
    } as UserData,
  },
  reducers: {
    setUserData(state, action: PayloadAction<UserData>) {
      state.user = action.payload;
    },
  }
});

export const { setUserData } = userSlice.actions;
export default userSlice.reducer;