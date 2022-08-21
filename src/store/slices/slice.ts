import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

//Type___________________________________
type initialStateType = {
  number: number;
  AsyncNumber: number;
  loading: boolean;
};

type payloadActionType = {
  payload: number;
};


const initialValues: initialStateType = {
  number: 0,
  AsyncNumber: 0,
  loading: false,
};

//action_Async_________________________________
export const setCountAsync = createAsyncThunk(
  "counter1/setValueAsync",
  async (value: number) => {

    const data = new Promise<number>((resolve, reject) => {
      setTimeout(() => {
        resolve(value);
      }, 1000);
    });
    
    return await data;
  }
);
//action_Async_________________________________

const slice = createSlice({
  name: "counter1",
  initialState: initialValues,
  reducers: {
    count: (state: initialStateType, actions: payloadActionType) => {
      state.number = state.number + actions.payload;
      if (state.number < 0) {
        state.number = state.number + 1;
      }
    },
    clear: (state: initialStateType, actions: payloadActionType) => {
      state.number = 0;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(
      setCountAsync.fulfilled,
      (state: initialStateType, actions: payloadActionType) => {
        state.AsyncNumber = state.AsyncNumber + actions.payload;
        if (state.AsyncNumber < 0) {
          state.AsyncNumber = state.AsyncNumber + 1;
        }
        state.loading = false;
      }
    );

    builder.addCase(
      setCountAsync.pending,
      (state: initialStateType, actions: PayloadAction) => {
        state.loading = true;
      }
    );
  },
});

export const { count, clear } = slice.actions;
export const sliceSelector = (store: RootState) => store.sliceReducer;
export default slice.reducer;
