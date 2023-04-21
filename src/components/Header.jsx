import React from "react";
import { useNavigate} from 'react-router-dom'
import { useSelector, useDispatch } from "react-redux";
import { logout, reset } from "../features/auth/authSlice";


const Header = () =>{
    const { user } = useSelector((state) => state.auth);
    const navigate = useNavigate();
    const dispatch = useDispatch()

    const logoutHandler = () => {
		dispatch(logout());
		dispatch(reset());
		navigate("/login");
	};
	console.log(user)

    return (
        <div id="header" className="NCBox" > 
            <div className="NCLogo">
            <img src={require("../images/logoJakaCoaching.png")} alt="Logo" />
            </div>

            <div className="NCLogoNavigation"> 
                <div className="NCNavigation">
                    <div className="NCNavItem"> 
                    
                    {user ? 
                        (
                        <button onClick={logoutHandler}>Logout</button>
                         ):
                        <a href="/login">Login</a>  }
                    </div>

                    <div className="NCNavItem">Home</div>
                    <div className="NCNavItem">Tools</div>
                    <div className="NCNavItem">Discord</div>
                    <div className="NCNavItem">Lessons</div>
                    <div className="NCNavItem">FAQ</div>
                    <div className="NCNavItem">Contact Us</div>
                    <div className="NCNavItem">Sign In</div>
                </div>
            </div>
        </div>
)
}
export default Header;
