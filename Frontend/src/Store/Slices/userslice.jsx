import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  user: [],
};
export const UserSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loaduser: (state, action) => {
      state.user = action.payload;
      // console.log(state.user);
      
    },
  },
});
export default UserSlice.reducer;
export const { loaduser } = UserSlice.actions;
