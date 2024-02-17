import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { LoginData, RegisterData, User } from "../../types/User";
import authService from "./authService";
import notification from "../../services/notification";

export const register = createAsyncThunk(   
  "auth/register",
  async (data: RegisterData) => {
    const { repeatPassword, ...registerData } = data;

    if(!data.firstName || !data.lastName || !data.phone || !data.email || !data.password || !data.repeatPassword) {
        return notification.warning('All fields are required');
    };

    if(data.password !== repeatPassword) {
        return notification.warning('Passwords do not match');
    };

    try {
      return await authService.register(data);
    } catch (e: any) {
      if (e.status === 403) {
        return notification.error("Invalid email or password", 3000);
      }
      notification.error(e.message, 3000);
    }
  }
);

export const logout = createAsyncThunk("auth/logout", async (_, thunkAPI) => {
  const state = thunkAPI.getState() as any;
  const user = state.auth.user;
  try {
    return await authService.logout(user);
  } catch (e: any) {
    notification.update(e.message, 3000, "error");
  }
});

export const login = createAsyncThunk("auth/login", async (data: LoginData) => {
  if (!data.email || !data.password) {
    return notification.warning("All fields are required");
  };

  try {
    return await authService.login(data);
  } catch (e: any) {
    if (e.status === 403) {
      return notification.error("Invalid email or password", 3000);
    }
    notification.error(e.message, 3000);
  }
});

type initialStateType = {
  user: User | false;
};

const userDataString = localStorage.getItem("userData") || false;
const userLocalStorage = userDataString ? JSON.parse(userDataString) : false;

const initialState: initialStateType = {
  user: userLocalStorage,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(register.fulfilled, (state, action) => {
        if (action.payload) {
          state.user = action.payload;
          localStorage.setItem("userData", JSON.stringify(action.payload));
        }
      })
      .addCase(logout.fulfilled, (state, action) => {
        if (action.payload) {
          state.user = false;
          localStorage.removeItem("userData");
        }
      })
      .addCase(login.fulfilled, (state, action) => {
        if(action.payload) {
            state.user = action.payload;
            localStorage.setItem("userData", JSON.stringify(action.payload));
        }
      });
  },
});

export default authSlice.reducer;
