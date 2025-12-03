import { createSlice } from '@reduxjs/toolkit';

const usersFromStorage = localStorage.getItem('users')
    ? JSON.parse(localStorage.getItem('users'))
    : [];

const initialState = {
    users: usersFromStorage,      
    user: null,                  
    isLoggedIn: false,
    loading: false,
    error: null,
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        loginStart: (state) => {
            state.loading = true;
            state.error = null;
        },
        loginSuccess: (state, action) => {
            state.loading = false;
            state.user = action.payload;
            state.isLoggedIn = true;
        },
        loginFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
        logout: (state) => {
            state.user = null;
            state.isLoggedIn = false;
        },
        registerStart: (state) => {
            state.loading = true;
            state.error = null;
        },
        registerSuccess: (state, action) => {
            state.loading = false;
            state.user = action.payload;
            state.isLoggedIn = true;
            state.users.push(action.payload);
            localStorage.setItem('users', JSON.stringify(state.users));
        },
        registerFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
    },
});

export const {
    loginStart,
    loginSuccess,
    loginFailure,
    logout,
    registerStart,
    registerSuccess,
    registerFailure,
} = userSlice.actions;

export default userSlice.reducer;