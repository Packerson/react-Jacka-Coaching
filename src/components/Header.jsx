import React from "react";

const Header = () =>{


    return (
        <div id="header" className="NCBox" > 
            <div className="NCLogo">
            <img src={require("../images/logoJakaCoaching.png")} alt="Logo" />
            </div>

            <div className="NCLogoNavigation"> items
                <div className="NCNavigation">
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
