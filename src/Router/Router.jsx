import { createBrowserRouter } from "react-router-dom";
import MainLeaout from "../Leaout/MainLeaout";
import Home from "../Pages/Home";
import Apperment from "../Pages/Apperment";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import PrivetRoute from "./PrivetRouter";
import DeshBord from "../Leaout/DeshBord";
// import DsCart from "../components/Deshbord/DsCart";
import Profile from "../components/Deshbord/Profile";
import Announcements from "../components/Deshbord/Announcements";
import ManageMamber from "../components/Deshbord/ManageMamber";
import AdminRoute from "./AdminRoute";
import MakeAnnoucemnet from "../components/Deshbord/MakeAnnoucemnet";
import ShowAnnouncement from "./ShowAnnouncement";
import Payment from "../components/Payment/Payment";
import PaymentHistory from "../components/Payment/PaymentHistory";
import ErrorPage from "../Pages/ErrorPage";
import Request from "./Request";
import Contact from "../components/Deshbord/Contact";
// import Request from "./Request";

const Router = createBrowserRouter([
    {
        path:"/",
        element:<MainLeaout></MainLeaout>,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            {
                path:"/",
                element:<Home></Home>
            },
            {
                path:"/apartment",
                element:<PrivetRoute><Apperment></Apperment></PrivetRoute>,
                loader:()=>fetch("https://building-management-server-wheat.vercel.app/rooms"),
            },

        ]
    },
    {
        path:"/login",
        element:<Login></Login>
    },
    {
        path:"/register",
        element:<Register></Register>
    },
    // deshbor router
    {
        path:"dashboard",
        element:<PrivetRoute> <DeshBord></DeshBord></PrivetRoute>,
        children:[
            {
                path:'profile',
                element:<Profile></Profile>
            },
            {
                path:'announcements',
                element:<Announcements></Announcements>
            },
            {
                path:"contact",
                element:<Contact></Contact>
            },
            {
              path:"historey",
              element:<ShowAnnouncement/>,
              loader:()=>fetch("https://building-management-server-wheat.vercel.app/announsment")
            },
            {
                 path:"payment",
                 element:<Payment></Payment>
            },
            {
                path:"paymentHistory",
                element:<PaymentHistory></PaymentHistory>
            },
            // admin routes
            {
                path:"manageItems",
                element:<AdminRoute><ManageMamber></ManageMamber></AdminRoute>
            },
            {
                path:"announcement",
                element:<MakeAnnoucemnet></MakeAnnoucemnet>

            },
            {
                path:"profile",
                element:<Profile></Profile>,
            },
            {
                path:"request",
                element:<Request></Request>,
                loader:()=>fetch("https://building-management-server-wheat.vercel.app/agreement")
            }
            
        ]
    }
    
])

export default Router;