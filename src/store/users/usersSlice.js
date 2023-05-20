import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [],
  isLoading: false,
  error: undefined,
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    // Handle the FETCH_USERS action type
    fetchUsers(state, action) {
      state.isLoading = true;
      state.error = undefined;

      async function fetchUsers() {
        const url = "https://api.example.com/users";
        const response = await fetch(url);
        const users = await response.json();
      
        return users;
      }
            
      state.users = users;
      state.isLoading = false;
    },
    // Handle the ADD_USER action type
    addUser(state, action) {
      state.users.push(action.payload);
    },
    // Handle the DELETE_USER action type
    deleteUser(state, action) {
      const users = state.users.filter(user => user.id !== action.payload.id);
      state.users = users;
    },
  },
});

export const {
  users,
  fetchUsers,
  addUser,
  deleteUser,
} = usersSlice.actions;

export default usersSlice.reducer;