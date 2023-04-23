import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import imageService from './imagesService';

const initialState = {
    images: [],
    isError: false,
    isLoading: false,
    isSuccess:false,
    message: '',
}

// Get image
export const getImage = createAsyncThunk(
    'images/getImage',

    async(_, thunkAPI) =>{
        try{
            imageService.getImage();

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
    name: 'images',
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
                state.images = [...state.images, action.payload.results];
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