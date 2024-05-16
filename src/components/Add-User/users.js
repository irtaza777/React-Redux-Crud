import { createSlice,nanoid } from "@reduxjs/toolkit"

const initialState={
    users:[{id:1,name:"irtaza",email:"irtaza@gmail.com"}]
    }
const userSlice=createSlice({
    name:"user",
    initialState,
    reducers:{
    addUser:(state,action)=>{
    
        const user={
    id:nanoid(),
    name:action.payload,
    email:action.payload

    }
    state.users.push(user)

}
    }
})
export const {addUser}= userSlice.actions;

export default  userSlice.reducer