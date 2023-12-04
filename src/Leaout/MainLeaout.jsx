import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../sheard/Navbar/Navbar";

import { Toaster } from "react-hot-toast";
import Footer from "../sheard/footer/Footer";


const MainLeaout = () => {

const location = useLocation();
console.log(location)
// const noHeaderFooter = location.pathname.includes('login') || location.pathname.includes('register')

    return (
        <div>
            
          <div className=" max-w-[1200px] mx-auto py-5">
          <Navbar></Navbar>
       <Outlet></Outlet>
     
       <Toaster />

          </div>
          <Footer></Footer>
             
        </div>
    );
};

export default MainLeaout;