import {createSlice, createAsyncThunk, PayloadAction} from "@reduxjs/toolkit";

interface todoState {

}


const initialState: todoState = {

}

export const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
    },


});

export const {  } = todoSlice.actions;

export default todoSlice.reducer;
