import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    token: '',
    loggedState: false,
}

export const authSlice = createSlice({
    name: 'accessToken',
    initialState,
    reducers: {
        activeMenu: (state) => {
            state.token = !state.token
            console.log(state.token)
        },
        setAccessToken: (state, action) => {
            state.token = action.payload
            // console.log('from authslice '+ state.token)
        },
        removeAccessToken: (state) => {
            state.token = ''
            // console.log('from authslice '+ state.token)
        },
        setLoggedStateTrue: (state) => {
            state.loggedState = true
        },
        setLoggedStateFalse: (state) => {
            state.loggedState = false
        },
    },
})


export const { activeMenu, setAccessToken, removeAccessToken, setLoggedStateFalse, setLoggedStateTrue } = authSlice.actions

export default authSlice.reducer