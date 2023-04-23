import axios from "axios";

const GET_IMAGE_URL = "http://localhost:8000/api/v1/image/test1/";

// Get link to image
const getImage = async () => {
    const response = await axios.get(GET_IMAGE_URL)
    return response.data
};


const imageService = {getImage};

export default imageService;