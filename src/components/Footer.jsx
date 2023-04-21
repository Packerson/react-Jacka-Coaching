import React from 'react'

const Footer = () => {
  return (
    <>
        <div className='FooterBox'>
            <div className="NCBox">
                <div className="NCLogo"> 
                <img src={require("../images/logoJakaCoaching.png")} alt="Logo" />
                </div>

                <div className="NCLogoNavigation">
                    <div class="NCNavigation">
                        <div className="NCNavItem">Facebook</div>
                        <div className="NCNavItem">Twitter</div>
                        <div className="NCNavItem">Instagram</div>
                        <div className="NCNavItem">Youtube</div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Footer