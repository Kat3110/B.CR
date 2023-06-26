import { isRejectedWithValue } from "@reduxjs/toolkit";
import { api } from "services";

/**
 * Log a warning and show a toast!
 */
export const rtkQueryErrorLogger = (_api) => (next) => (action) => {
  // RTK Query uses `createAsyncThunk` from redux-toolkit under the hood, so we're able to utilize these matchers!
  if (isRejectedWithValue(action)) {
    console.log({ title: "Async error!", message: action.error.message });
  }

  return next(action);
};

export const middleware = [api.middleware, rtkQueryErrorLogger];
