// import { useContext } from "react";
// import { AuthContext } from "../Provider/AuthProvider";
// import { Navigate } from "react-router-dom";

import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate } from "react-router-dom";


const PrivetRoute = ({children}) => {
  const { user, loading } = useContext(AuthContext)

if( loading){
  return <div> <img src="https://i.ibb.co/2Kqz8p4/loading-icon-on-black-vector-24544990.jpg" className="mx-auto items-center h-[30vh] mt-8 " alt="" /></div>
}

if( !user?.email){
    return <Navigate to={"/login"}></Navigate>
}

return children
};

export default PrivetRoute;