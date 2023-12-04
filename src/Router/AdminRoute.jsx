import { useContext } from "react";
import useAdmin from "../components/hookes/useAdmin";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate } from "react-router-dom";


const AdminRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const [isAdmin, isAdminLoading] = useAdmin();


    if (loading || isAdminLoading) {
        return <div> <img src="https://i.ibb.co/2Kqz8p4/loading-icon-on-black-vector-24544990.jpg" className="mx-auto items-center h-[30vh] mt-8 " alt="" /></div>
    }

    if (user && isAdmin) {
        return children;
    }

    return <Navigate to="/"></Navigate>

};

export default AdminRoute;