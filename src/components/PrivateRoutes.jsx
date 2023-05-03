import { Navigate, Outlet } from 'react-router-dom'


// protected routes to prevent non-authoriaztion users access to page
const PrivateRoutes = () => {
    let auth = {'token':true}
    
    return (
      auth.token ? <Outlet/> : <Navigate to='/login'/>
    )
  }

export default PrivateRoutes;