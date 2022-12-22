import { createSlice } from '@reduxjs/toolkit';

const signInSlice = createSlice({
  name: 'signIn',
  initialState: {
    signIn: false
  },
  reducers: {
    setSignIn(state) {
      state.signIn = true;
    },
    setSignOut(state){
      state.signIn = false;
    }
  }
});
  
export const { setSignIn, setSignOut } = signInSlice.actions;
export default signInSlice.reducer;