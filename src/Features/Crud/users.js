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

},
removeUser:(state,action)=>{
    state.users=state.users.filter((user)=>user.id!==action.payload)

},
updateUser:(state,action)=>{
    const{id,name,email}=action.payload
    const updateduser=state.users.find(f=>f.id==id)
    if(updateduser){
        updateduser.name=name;
        updateduser.email=email;

    }
}
    }
})
export const {addUser,removeUser,updateUser}= userSlice.actions;

export default  userSlice.reducer