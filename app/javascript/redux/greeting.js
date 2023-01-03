import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const GREETINGS = "GREETINGS";

const init = [];

const greetingReducer = (state = init, action) => {
switch (action.type) {
case GREETINGS:
return action.greetings
default:
return state;
}
}; 

export default greetingReducer;

const url = "http://localhost:3000/api/v1/greeting";

export const getGreetings = createAsyncThunk( GREETINGS, async (args, {dispatch}) => {
const config = {
headers: {
"Content-Type": "application/json",
},
}
try {
const {data} = await axios.get(url, config);
dispatch({ type: GREETINGS, greetings: data[0] });

} catch (err) {
 
}
}); 