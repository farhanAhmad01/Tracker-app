import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { todoTrackerAuthServices } from "../services/authServices";
import { setAuthToken, verifyToken } from "../utils/jwt";
import {
  pushErrorNotification,
  pushSuccessNotification,
} from "../utils/pushNotification";

export const SignupUser = createAsyncThunk(
  "todoTracker/auth/signup",
  async (data, { rejectWithValue }) => {
    try {
      const response = await todoTrackerAuthServices.signupUser(data);
      if (response.error) {
        pushErrorNotification(response.error);
        return rejectWithValue(response);
      }
      pushSuccessNotification("Successfully Register!");
      return response;
    } catch (error) {
      return rejectWithValue(error.message || "Failed to sign up");
    }
  }
);

export const LoginUser = createAsyncThunk(
  "todoTracker/auth/login",
  async (data, { rejectWithValue }) => {
    try {
      const response = await todoTrackerAuthServices.loginUser(data);
      if (response.error) {
        pushErrorNotification(response.error);
        return rejectWithValue(response);
      }
      pushSuccessNotification("Successfully Login!");
      return response;
    } catch (error) {
      return rejectWithValue(error.message || "Failed to log in");
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: verifyToken(),
    error: "",
  },

  reducers: {
    logoutUser(state) {
      state.user = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(SignupUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.error = "";
        setAuthToken(action.payload);
      })
      .addCase(LoginUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.error = "";
        setAuthToken(action.payload);
      });
  },
});

export const { logoutUser } = authSlice.actions;
export const selectUser = (state) => state.auth;
export default authSlice.reducer;
