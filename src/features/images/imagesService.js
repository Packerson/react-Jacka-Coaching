import axios from "axios";

// link to backend 
const GET_IMAGES_URL = "http://localhost:8000/api/v1/image/";

// send POST with data from buttons and user info
// if ok Get link to images
const getImage = async (dataFromBtn) => {
    
    // get token from localStorage, token is saved in authService login function
    const token = localStorage.getItem("token");
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
        }
    }
    console.log(dataFromBtn, "imageService")
    const response = await axios.post(GET_IMAGES_URL, dataFromBtn, config)
    if (response.data) {
        localStorage.setItem("image_url", JSON.stringify(response.data));
    }
    return response.data
};

const imageService = {getImage};

export default imageService;