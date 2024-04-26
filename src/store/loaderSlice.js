import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    status : false
}
const loaderSlice = createSlice({
    name : "loader",
    initialState,
    reducers : {
        toggleLoader : (state, action) => {
            state.status = !state.status;
        }
    }
})

export const {toggleLoader} = loaderSlice.actions;
export default loaderSlice.reducer;