import axios from "axios";

const GET_IMAGE_URL = "http://localhost:8000/api/v1/image/test1/";

// Get link to image
const getImage = async () => {
    const response = await axios.get(GET_IMAGE_URL)
    if (response.data) {
		localStorage.setItem("image_url", JSON.stringify(response.data));
	}
    console.log(response.data.image_url)
    return response.data.image_url
};


const imageService = {getImage};

export default imageService;