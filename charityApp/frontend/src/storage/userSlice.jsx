import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios";

const initialState = {
  charities: [],
  myCharities: [],
  isOrganization: false,
  charity: {},
  url: ""
}

export const addUser = createAsyncThunk("adduser", async (user)=>{
  const res = await axios.post("http://localhost:3000/register", user);
  return res.data;
})

export const loginUser = createAsyncThunk("loginUser", async(user)=>{
  const res = await axios.post("http://localhost:3000/login", user);

  localStorage.setItem("token", res.data.token);
  localStorage.setItem("isOrganization", res.data.isOrganization);


  return res.data;
})

export const addCharity = createAsyncThunk("addCharity", async (charity)=>{
  const res = await axios.post('http://localhost:3000/addCharity', charity,{
    headers:{
      Authorization: localStorage.getItem("token"),
    }
  });
  console.log(res);
  return res.data;
})

export const myCharities = createAsyncThunk("myCharities", async ()=>{
  const res = await axios.get('http://localhost:3000/myCharities',{
    headers:{
      Authorization: localStorage.getItem("token"),
    }
  });
  console.log(res);
  return res.data;
})

export const getCharities = createAsyncThunk("charities", async ()=>{
  const res = await axios.get('http://localhost:3000/charities');
  console.log("inside charities");
  return res.data;
})

export const donateMoney = createAsyncThunk("donateMoney", async (id)=>{
  
  const data = await fetch(`http://localhost:3000/donate/${id}`, {
    method:"POST",
    headers:{
      Authorization: localStorage.getItem("token")
    }
  })
  const res = await data.json();
  return res;
})

const userSlice = createSlice({
  name:"user",
  initialState,
  reducers:{
    setSingleCharity : (state, action)=>{
      localStorage.setItem("singleCharity", JSON.stringify(action.payload));
    },
    getSingleCharity : (state, action)=>{
      state.charity  = JSON.parse(localStorage.getItem("singleCharity"));
    }
  },
  extraReducers: (builder)=>{
    builder.addCase(addUser.fulfilled, (state,action)=>{
      console.log(action.payload);
      state.isOrganization = localStorage.getItem("isOrganization");
    }),
    builder.addCase(loginUser.fulfilled, (state, action)=>{
      console.log(action.payload);
      state.isOrganization = localStorage.getItem("isOrganization");
    }),
    builder.addCase(addCharity.fulfilled, (state, action)=>{
      console.log(action.payload);
      state.isOrganization = localStorage.getItem("isOrganization");
    }),
    builder.addCase(myCharities.fulfilled, (state, action)=>{
      console.log(action.payload);
      state.myCharities = action.payload.charities
      state.isOrganization = localStorage.getItem("isOrganization");
      console.log(localStorage.getItem("isOrganization"));
    }),
    builder.addCase(getCharities.fulfilled, (state, action)=>{
      console.log(action.payload);
      state.charities = action.payload.charities
      state.isOrganization = localStorage.getItem("isOrganization");
      console.log(localStorage.getItem("isOrganization"));
    }),
    builder.addCase(donateMoney.fulfilled, (state,action)=>{
      console.log(action.payload);
      state.url = action.payload.url;
    })
  }
})

export default userSlice.reducer;
export const {setSingleCharity, getSingleCharity} = userSlice.actions;