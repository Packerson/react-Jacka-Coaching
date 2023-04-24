import axios from "axios";


const CHECK_EMAIL_URL = "http://localhost:8000/api/v1/check/check/";


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
	if (!response.data.INFO) {
		
		localStorage.setItem("user", JSON.stringify(response.data));
		return response.data;
	}else {
		console.log(response.data.INFO)
		return response.data
	}
};


// Logout user, remove user data
const logout = () => localStorage.removeItem("user");


const authService = {login, logout}

export default authService;

