import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const CONVERSATION_ENDPOINT=`${process.env.REACT_APP_API_ENDPOINT}/conversation`
const initialState = {
  status: "",
  error: "",
  conversations: [],
  activeConversation: {},
  Notifications: [],
};

//functions
export const getConversations=createAsyncThunk("conversation/all",async(token,{rejectWithValue})=>{
    try {
        const {data}=await axios.get(CONVERSATION_ENDPOINT,{
            headers:{
                    Authorization:`Bearer ${token}`,
            }
        })
        return data;
    } catch (error) {
        return rejectWithValue(error.response.data.error.message)
    }
})



export const chatSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {
    setActiveConversation: (state, action) => {
      state.activeConversation = action.payload;
    },
  },
  extraReducers(builder){
    builder
    .addCase(getConversations.pending,(state,action)=>{
        state.status="loading";
    })
    .addCase(getConversations.fulfilled,(state,action)=>{
        state.status="succeeded"
        state.conversations=action.payload
    })
    .addCase(getConversations.rejected,(state,action)=>{
        state.status="failed"
        state.error=action.payload
        state.conversations=action.payload
    })
  }
});
export const {} = chatSlice.actions;
export default chatSlice.reducer;
