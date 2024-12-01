import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'users',
  initialState: [],
  reducers: {
    addUser: (state, action) => {
      state.push(action.payload); // Adds a new user to the state
    },
    removeUser: (state, action) => {
      return state.filter(user => user.id !== action.payload.id); // Removes a user by ID
    },
  },
});

// Export actions and reducer
export const { addUser, removeUser } = userSlice.actions;
export default userSlice.reducer;