import { fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {
  userLogout,
  selectMe,
  selectAdmin,
  updateAdmin,
  updateUser,
  adminLogout,
} from "app/auth";
import { Mutex } from "async-mutex";

const baseUrl = "http://15.164.251.83:3000";

const baseQuery = fetchBaseQuery({
  prepareHeaders: (headers, { endpoint, getState }) => {
    const {
      auth: {
        admin: { authToken: adminToken },
        user: { authToken, socketId },
      },
    } = getState();
    const token = (function () {
      if (endpoint.includes("admin")) return adminToken;
      return authToken;
    })();

    if (token) {
      headers.set("authorization", `Bearer ${token}`);
    }

    if (socketId) {
      headers.set("SocketId", socketId);
    }

    return headers;
  },
  baseUrl,
});

const mutex = new Mutex();
export const customFetchBase = async (args, api, extraOptions) => {
  await mutex.waitForUnlock();
  let result = await baseQuery(args, api, extraOptions);
  if (result.error?.status === 401) {
    if (!mutex.isLocked()) {
      const release = await mutex.acquire();
      try {
        const isAdmin = api.endpoint.includes("admin");

        const { refreshToken } = (() => {
          if (isAdmin) {
            return selectAdmin(api.getState());
          }
          return selectMe(api.getState());
        })();

        const { data } = await baseQuery(
          {
            url: "/auth/auth-token",
            method: "POST",
            body: { token: refreshToken },
          },
          api,
          extraOptions,
        );

        if (data) {
          const authToken = data.data;
          api.dispatch(
            isAdmin ? updateAdmin({ authToken }) : updateUser({ authToken }),
          );

          result = await baseQuery(args, api, extraOptions);
        } else {
          api.dispatch(isAdmin ? adminLogout() : userLogout());
        }
      } finally {
        release();
      }
    } else {
      await mutex.waitForUnlock();
      result = await baseQuery(args, api, extraOptions);
    }
  }

  return result;
};
