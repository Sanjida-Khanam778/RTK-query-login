import { createSlice } from '@reduxjs/toolkit'
const initialState={
  user: null
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action)=>{
      state.user = action.payload.user;
      state.accessToken = action.payload.accessToken;
      state.refreshToken = action.payload.refreshToken;
      console.log(state.user, state.accessToken, state.refreshToken)
    },
    logout: (state)=>{
      state.user = null
      state.accessToken = null
      state.refreshToken = null
    }
  }
})

export const {setUser, logout} = userSlice.actions;
export default userSlice.reducer;