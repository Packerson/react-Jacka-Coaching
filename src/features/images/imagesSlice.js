import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import imageService from './imagesService';

// init state
const initialState = {
    allCharts: [],
    images: {},
    isError: false,
    isLoading: false,
    isSuccess:false,
    message: '',
}

// Get image
export const getImage = createAsyncThunk(
    'images/getImage',

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

// reset GetImage, 
export const resetImage = createAsyncThunk("images/resetImage", async () => {
	imageService.resetImage();
});

// send GET to fetch all charts with buttons combinations
export const getAllCharts = createAsyncThunk(
    'images/getAllCharts',

    // send data to backend
    async(thunkAPI) =>{
        try{
            return await imageService.getAllCharts();

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
                // fragment for google drive api 
                // if (action.payload.message){
                //     state.images = action.payload
                // } else {
                // state.images = action.payload.files
                // console.log(action.payload.files)
                // }
            })
            .addCase(getImage.rejected, (state, action)=>{
                state.isError = true;
                state.isLoading = false;
                state.message = action.payload;
            })

            // get all charts
            .addCase(getAllCharts.pending, (state)=>{
                state.isLoading = true;
            })
            .addCase(getAllCharts.fulfilled, (state, action)=>{
                state.isLoading = false;
                state.isSuccess = true;
                state.allCharts = action.payload
            })
            .addCase(getAllCharts.rejected, (state, action)=>{
                state.isError = true;
                state.isLoading = false;
                state.message = action.payload;
            })

            .addCase(resetImage.fulfilled, (state)=>{
                state.images = {};
            })
    }
});

export const {reset} = imageSlice.actions;

export default imageSlice.reducer;