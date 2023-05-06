import axios from "axios";

// link to backend to check user email
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

	// if no info in response save data in localStore as a user and token
	if (!response.data.INFO) {
		const token = response.data.token;
		localStorage.setItem("token", token);
		localStorage.setItem("user", JSON.stringify(response.data));
		return response.data;

	}else {
		return response.data
	}
};

// const getUser = () => {
// 	// Get user information from localStorage
// 	const user = JSON.parse(localStorage.getItem("user"));
// 	if (user) {
// 	  return user;
// 	} else {
// 	  return null;
// 	}
//   };

// Logout user, remove user data
const logout = () => localStorage.removeItem("user");


const authService = {login, logout}

export default authService;

