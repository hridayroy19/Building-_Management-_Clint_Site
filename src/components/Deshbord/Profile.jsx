// import { useLoaderData } from "react-router-dom";
import { FaFacebook, FaGithub, FaInstagram } from "react-icons/fa6";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const Profile = () => {
    //  const userProfile = useLoaderData()
    //  console.log(userProfile);

    const {user}= useContext(AuthContext);
    // console.log(user);
    // console.log(user.photoURL);
      
    return (
        <div className=" ml-11  flex justify-center items-center  ">
            <div className="card w-[350px] h-[400px] bg-gray-600 text-neutral-content">
  <div className="card-body items-center text-center">
  <div className="avatar online">
  <div className="w-24 top-9 rounded-full">
  <img alt="" src={user?.photoURL} />
  </div>
</div>
  <div className="mt-5">
  <p className=" font-bold mb-3 "> Name :{user.displayName} </p>
    <h1 className=" font-bold "> Email :{user.email} </h1>
  </div>
    <div className="card-actions justify-end">
      <button className="btn btn-outline text-white">Flower</button>
      <button className="btn btn-outline text-white">Massage</button>
    </div>
    <div className="flex gap-6 text-2xl text-white mt-5"> 
      <FaFacebook></FaFacebook>
      <FaGithub></FaGithub>
      <FaInstagram></FaInstagram>
    </div>
  </div>
</div>
        </div>
    );
};

export default Profile;