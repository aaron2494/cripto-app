import {
    createSlice,
    createAsyncThunk,
    createSelector,
  } from "@reduxjs/toolkit";
  import { Cripto } from "../types/cripto";
  import { RootState } from "./store";
  
  export const fetchCryptoData = createAsyncThunk(
    "cripto/fetchCryptoData",
    async () => {
      const res = await fetch("https://data.messari.io/api/v1/assets");
      const data = await res.json();
      return data.data as Cripto[];
    }
  );
  
  interface CriptoState {
    data: Cripto[];
    isLoading: boolean;
    error: string | null;
  }
  
  const initialState: CriptoState = {
    data: [],
    isLoading: false,
    error: null,
  };
  
  const criptoSlice = createSlice({
    name: "cripto",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder.addCase(fetchCryptoData.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      });
      builder.addCase(fetchCryptoData.fulfilled, (state, action) => {
        state.data = action.payload;
        state.isLoading = false;
        state.error = null;
      });
      builder.addCase(fetchCryptoData.rejected, (state, action) => {
        state.data = [];
        state.isLoading = false;
        state.error = action.error.message ?? "Error fetching crypto data";
      });
    },
  });
  
  export const selectCryptoData = createSelector(
    (state: RootState) => state.crypto.data,
    (data) => data
  );
  
  export default criptoSlice.reducer;