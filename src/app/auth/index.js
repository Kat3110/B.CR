import { createSlice } from "@reduxjs/toolkit";
import { authApi } from "services/auth";
import { adminApi } from "services/admin";

const initialUserData = {
  avatar: null,
  createdAt: null,
  email: null,
  id: null,
  lastAccessAt: null,
  name: null,
  nation: null,
  phoneNumer: null,
  role: null,
  sha256pass: null,
  status: null,
  updatedAt: null,
  verifyCode: null,
  authToken: null,
  refreshToken: null,
  profileColor: null,
};

const initialState = {
  user: { ...initialUserData, company: null, department: null, socketId: null },
  admin: initialUserData,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    userLogout: (state) => {
      state.user = initialState.user;
    },
    adminLogout: (state) => {
      state.admin = initialState.admin;
    },
    updateUser: (state, { payload }) => {
      state.user = {
        ...state.user,
        ...payload,
      };
    },
    updateAdmin: (state, { payload }) => {
      state.admin = {
        ...state.admin,
        ...payload,
      };
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      authApi.endpoints.login.matchFulfilled,
      (state, { payload }) => {
        const {
          Business: { companyName, department },
          ...user
        } = payload.data.user;
        state.user = {
          ...state.user,
          ...user,
          company: companyName,
          department,
          authToken: payload.data.authToken,
          refreshToken: payload.data.rfToken,
        };
      },
    );
    builder.addMatcher(
      adminApi.endpoints.adminLogin.matchFulfilled,
      (state, { payload }) => {
        state.admin = {
          ...payload.data.user,
          authToken: payload.data.authToken,
          refreshToken: payload.data.rfToken,
        };
      },
    );
  },
});

export default authSlice.reducer;

export const { updateUser, updateAdmin, userLogout, adminLogout } =
  authSlice.actions;

export const selectMe = (state) => state.auth.user;
export const selectAdmin = (state) => state.auth.admin;
