import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import authService from "./authService";

const user = localStorage.getItem("user");

// Initial state, if user set user else set null
const initialState = {
	user: user ? user : null,
	isError: false,
	isLoading: false,
	isSuccess: false,
	message: "",
};

// wait for data, if error catch error
export const login = createAsyncThunk("auth/login", async (user, thunkAPI) => {
	try {
		return await authService.login(user);
	} catch (error) {
		const message =
			(error.response &&
				error.response.data &&
				error.response.data.message) ||
			error.message ||
			error.toString();

		return thunkAPI.rejectWithValue(message);
	}
});

// logout user
export const logout = createAsyncThunk("auth/logout", async () => {
	authService.logout();
});


// reducer for login
export const authSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {
        // reset data in state
		reset: (state) => {
			state.isLoading = false;
			state.isError = false;
			state.isSuccess = false;
			state.message = "";
		},
	},
    // reducer for asynchronize function
    extraReducers:(builder) => {
        builder
        // send user data
        .addCase(login.pending, (state) => {
            state.isLoading = true;
        })
        // login success
        .addCase(login.fulfilled, (state, action) => {
            state.isLoading = false;
            
			if (action.payload.INFO) {
            	state.message = action.payload.INFO;
				state.isSuccess = false;	
			} else {
				state.user = action.payload;
				state.isSuccess = true;
			}
        })
        // login rejected, save message
        .addCase(login.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
            state.user = null;
        })
        // logout
        .addCase(logout.fulfilled, (state) => {
            state.user = null;
        })
    }
})

export const { reset } = authSlice.actions;

export default authSlice.reducer;