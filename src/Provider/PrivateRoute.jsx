import React, { use } from 'react';
import { Navigate, useLocation } from 'react-router';
// import Loading from '../pages/Loading';
import { AuthContext } from '../Context/AuthContext/AuthContext';

const PrivateRoute = ({children}) => {

    const {user, loading}= use(AuthContext)
    const location= useLocation()
    
    // if(loading){
    //     return <Loading></Loading>
    // }

    if(user){
        return children;
    }
    return <Navigate state={location.pathname} to={"/auth/login"}></Navigate>
    
    
};

export default PrivateRoute;