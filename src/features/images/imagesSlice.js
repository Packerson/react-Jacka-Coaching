import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import imageService from './imagesService';

// init state
const initialState = {
    images: {},
    isError: false,
    isLoading: false,
    isSuccess:false,
    message: '',
}

// Get image
export const getImage = createAsyncThunk(
    'images/getAll',

    // send data to backend
    async(dataFromBtn, thunkAPI) =>{
        try{
            return await imageService.getImage(dataFromBtn);

        }catch (error){
        const message =
            (error.response && 
                error.response.data && 
                error.response.data.message) ||
                error.message ||
                error.toString();

        return thunkAPI.rejectWithValue(message);        
    }
})

export const imageSlice = createSlice({
    name: 'image',
    initialState,
    reducers:{
        reset:(state)=> initialState
    },
    extraReducers: (builder)=> {
        builder
            .addCase(getImage.pending, (state)=>{
                state.isLoading = true;
            })
            .addCase(getImage.fulfilled, (state, action)=>{
                state.isLoading = false;
                state.isSuccess = true;
                state.images = action.payload
            })
            .addCase(getImage.rejected, (state, action)=>{
                state.isError = true;
                state.isLoading = false;
                state.message = action.payload;
            })
    }
});

export const {reset} = imageSlice.actions;

export default imageSlice.reducer;