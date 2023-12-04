import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
// import axios from "axios";
import Swal from "sweetalert2";
import useaxiosSecure from "../hookes/axiosSecure";
// import useaxiosSecure, { axiosSecure } from "../hookes/axiosSecure";


const Rooms = ({ manu }) => {
  const { img, flr, blk, apt, rent , _id } = manu || {};
  const { user , } = useContext(AuthContext)
const axiosSecure = useaxiosSecure()

  const  handelAddtoRooms = manu =>{
    console.log(manu , user.email ,  user.displayName);
    const roomsItem = {
      manuId:_id ,
      email:user.email,
      name:user.displayName,
      flr,
      img,
      apt,
      rent,
      blk,
    }
axiosSecure.post('/agreement', roomsItem )
.then(res =>{
  console.log(res.data);
  if(res.data.insertedId){
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: `${name} added to your card`,
      showConfirmButton: false,
      timer: 1500
    });
  }
})

  }


  return (
  <div  data-aos="flip-left">
      <div className="card w-80 h-80 bg-base-100 shadow-xl">
      <figure>
        <img src={img} alt="Shoes" className="w-[80%] " />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          Block name : {blk}
          <div className="badge badge-secondary">Floor no :{flr} </div>
        </h2>
        <p> Apartment no : {apt}</p>
        <p> Price : {rent} </p>
        <div className="card-actions justify-end">
          <button 
          onClick={()=>handelAddtoRooms(manu) }
          className=" btn btn-primary ">Agreement</button>
        </div>
      </div>
    </div>
  </div>
  );
};

export default Rooms;
