import { createSlice } from "@reduxjs/toolkit";


const CategorySlice= createSlice({
    name:"category",
    initialState:{
        Category:"All"
    },
    reducers:{
        SetCategory:(state,action)=>{
          state.Category=action.payload;  
        }
        
    },

    

})

export const {SetCategory}=CategorySlice.actions;
export default CategorySlice.reducer