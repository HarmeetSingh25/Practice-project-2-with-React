import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  data: [],
};
const UserSlice = createSlice({
  name: "xyz",
  initialState,
  reducers: {
    loadUser: (state,action) => {
        console.log(action  );
        state.data=action.payload
        
    },
  },
});
export const { loadUser } = UserSlice.actions;
export default UserSlice.reducer;
