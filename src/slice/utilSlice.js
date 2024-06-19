import { createSlice } from "@reduxjs/toolkit";

const initialState={
   isModal:false
}

export const utilSlice = createSlice({
    name:'utilSlice',
    initialState: initialState,
    reducers:{
       setIsModal:(state , action)=>{
         state.isModal = action.payload;
       },  
    }
});

export const {setIsModal} = utilSlice.actions;
export default utilSlice.reducer;