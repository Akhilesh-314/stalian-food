import { createSlice } from "@reduxjs/toolkit";

const SearchSlice=createSlice({
  name:"cart",
  initialState:{
    search:""

  },
  reducers:  {
    search:(state,action)=>{
        state.search=action.payload
        
        }
    }
});
export const {search}=SearchSlice.actions;

export default SearchSlice.reducer;