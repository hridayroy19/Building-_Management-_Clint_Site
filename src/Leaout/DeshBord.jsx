import {  FaCalendar, FaEnvelope, FaHome, FaList, FaShoppingCart, FaUsers, FaUtensils } from "react-icons/fa";
import { FaBook } from "react-icons/fa6";

import { NavLink, Outlet } from "react-router-dom";
import useAdmin from "../components/hookes/useAdmin";
// import { CgProfile } from "react-icons/cg";

const DeshBord = () => {

  const[ isAdmin ]=useAdmin()
  return (
    <div className=" lg:w-[1300px] mx-auto ">
      <div className=" flex gap-8 ">
        <div className=" lg:w-32 text-center min-h-screen">
          <ul className="menu flex-1 fixed mt-7 p-4">
                    {
                        isAdmin ? <>
                            <li className="uppercase font-bold">
                                    Admin 
                            </li>
                            <li>
                                <NavLink to="/dashboard/request">
                                    <FaUtensils></FaUtensils>
                                    Agreement Requests</NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/manageItems">
                                    <FaList></FaList>
                                    Manage Members</NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/announcement">
                                    <FaBook></FaBook>
                                    Make Announcement </NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/users">
                                    <FaUsers></FaUsers>
                                    Manage Coupons</NavLink>
                       </li>
                        </>
                            :
                            <>
                               
                                <li>
                                    <NavLink to="/dashboard/historey">
                                        <FaCalendar></FaCalendar>
                                        Announcements
                                        </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/announcements">
                                        <FaShoppingCart></FaShoppingCart>
                                      Make Payment </NavLink>
                                </li>                            
                                <li>
                                    <NavLink to="/dashboard/paymentHistory">
                                        <FaList></FaList>
                                        Payment History</NavLink>
                                </li>
                            </>
                    }
                    {/* shared nav links */}
                    <div className="divider"></div>
                    <li>
                        <NavLink to="/">
                            <FaHome></FaHome>
                            Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/contact">
                            <FaEnvelope></FaEnvelope>
                            Contact</NavLink>
                    </li> 
                    <li>
                                <NavLink to="/dashboard/profile">
                                    <FaUsers></FaUsers>
                                    Profile </NavLink>
                       </li>
                </ul>
        </div>
        <div className=" md:p-10  px-12 ">
          <Outlet></Outlet>
        </div>
      </div>
      </div>
  );
};

export default DeshBord;
