import axios from "axios";

// link to backend 
const GET_IMAGES_URL = "http://localhost:8000/api/v1/image/";

// send POST with data from buttons and user info
// if ok Get link to images
const getImage = async (dataFromBtn) => {
    const config = {
        header: {
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