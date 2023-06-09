import axios from "axios";
// import links to backend
import {CHECK_EMAIL_URL, GET_USER_DATA } from "../../links"


// Check email, send enquiers to 
// backend and wait for data 
// save data in localstorage
const login = async (userData) => {
	const config = {
		headers: {
			"Content-Type": "application/json",
		},
	};
	const response = await axios.post(CHECK_EMAIL_URL, userData, config);

	// if no info in response save data in localStore as a user and token
	if (!response.data.INFO) {
		const token = response.data.token;
		localStorage.setItem("token", token);
		localStorage.setItem("user", JSON.stringify(response.data))
	}
	return response.data;	
};

const getUser= async (userData) => {
    // get token from localStorage, token is saved in authService login function
    const token = localStorage.getItem("token");
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
        }
    }
    const response = await axios.post(GET_USER_DATA,userData,  config)
    if (response.data) {
        localStorage.setItem("user", JSON.stringify(response.data))
    }
    return response.data
};

// Logout user, remove user data
const logout = () => {
	localStorage.removeItem("image_url")
	localStorage.removeItem("user");
	localStorage.removeItem("token");
	localStorage.removeItem("GET_ALL_CHARTS");
}


const authService = {login, logout, getUser}

export default authService;

