import { Link, NavLink } from "react-router-dom";
import { CiViewList } from "react-icons/ci";
import { IoLogIn, IoLogOut } from "react-icons/io5";
// import { HiMiniComputerDesktop } from "react-icons/hi2";


import { FaHouseChimney } from "react-icons/fa6";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import useCart from "../../components/hookes/useCart";


const Navbar = () => {
  const { user ,  logOut} = useContext(AuthContext);
  console.log( 'photo url show', user)
const [cart] = useCart();

  const handelLogOut =()=>{
    logOut()
    .then(()=>{ })
    .catch( error => console.log(error));
  }


    return (
        <div className="navbar  z-10 bg-opacity-30  bg-gray-300">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              <li> <NavLink
            to="/"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "text-[#FF444A] underline " : ""
            }
          >
          
            <FaHouseChimney /> Home
          </NavLink></li>
              <li><NavLink
            to="/apartment"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "text-[#FF444A] underline " : ""
            }
          >
             <CiViewList />  Apartment
          </NavLink></li>

{/* now sent */}

           <li>
           <NavLink
            to="/dashboard"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "text-[#FF444A] underline " : ""
            }
          >
            Deshbord
          </NavLink>

           </li>





            </ul>
          </div>
          <img src="https://i.ibb.co/th0VpXV/360-F-367078280-f2fn-Tq6dicxjoa-Y8qiw6-Gsse4-Lj-ER1-Sx.jpg " alt="" className=" w-16 rounded" />
          <a className="  font-semibold ml-4">BUILDING MANAGEMENT
</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
          <li className=" text-sm uppercase font-bold"> <NavLink
            to="/"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "text-[#FF444A] underline " : ""
            }
          >
            <FaHouseChimney /> Home
          </NavLink></li>

              <li className=" text-sm uppercase font-bold">
                <NavLink
            to="/apartment"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "text-[#FF444A] underline " : ""
            }
          >
          <CiViewList />
            Apartment
          </NavLink></li>

{/* deshbord navaber */}
          <li className=" text-sm uppercase font-bold">
                <NavLink
            to="/dashboard"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "text-[#FF444A] underline " : ""
            }
          >
           <p className="">
           Deshbord
  {/* <div className="badge badge-secondary ml-2"> {cart.length} </div> */}
</p>
          </NavLink></li>

          </ul>
        </div>
        <div className="navbar-end">

        {
          user ? <>
          <span>{user?.displayName}</span>  </> :
          
          <><li> Your name </li></>
        }

        <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
        <img alt="" src={user?.photoURL} />

        </div>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li>
          <a className="justify-between">
            Profile
          </a>
        </li>
        <Link to={"/dashboard"}><li><a>dashboard</a></li></Link>

        {
          user ? <> <button className=" btn btn-success" onClick={handelLogOut} > <IoLogOut></IoLogOut> Logout </button> </> :
          
          <><li><Link to={"/login"}> <IoLogIn /> Login</Link></li></>
        }
        
      </ul>
    </div>


        </div>
      </div>
    );
};

export default Navbar;