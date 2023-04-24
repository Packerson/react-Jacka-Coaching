import axios from "axios";

const GET_IMAGES_URL = "http://localhost:8000/api/v1/image/";

// Get link to image
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
    console.log(response.data)
    return response.data
};


const imageService = {getImage};

export default imageService;