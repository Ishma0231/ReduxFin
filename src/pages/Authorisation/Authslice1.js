import { createAsyncThunk,createSlice } from "@reduxjs/toolkit";

export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async({ username, password }, thunkAPI)=>{
    try {
      const res = await fetch("https://fakestoreapi.com/auth/login",{
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });
      const data = await res.json();
      if (!res.ok) return thunkAPI.rejectWithValue(data);

      localStorage.setItem("token", data.token);
      return data.token;
    } 
    catch (err) {
      return thunkAPI.rejectWithValue("Error in fetching Products");
    }
  }
);

const authSlice = createSlice({
    name: "auth",
    initialState: {
    token: localStorage.getItem("token") || null,
    status: "idle",
    error: null,
  },
   reducers: {
    logout(state) {
      state.token = null;
      state.status="idle";
      localStorage.removeItem("token");
    },
  },
  extraReducers:(builder)=>{
    builder
      .addCase(loginUser.pending,(state) => {
        state.status = "loading";
      })
      .addCase(loginUser.fulfilled,(state, action) => {
        state.status = "succeeded";
        state.token = action.payload; 
      })
      .addCase(loginUser.rejected,(state, action) => {
        state.status = "failed";
        state.error = action.payload || "Login failed";
      });
  },
});

export const { logout } = authSlice.actions;
export const selectAuthToken = (state) =>state.auth.token;
export const selectAuthStatus = (state) =>state.auth.status;
export const selectAuthError = (state) =>state.auth.error;

export default authSlice.reducer;

