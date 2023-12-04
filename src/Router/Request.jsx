import { FaTrashAlt, } from "react-icons/fa";
import { IoPersonAddSharp } from "react-icons/io5";
import { useLoaderData } from "react-router-dom";
// import { useEffect, useState } from "react";


const Request = () => {

const users = useLoaderData([])
console.log(users);
// const axiosSecure = useaxiosSecure()

//  const handleDeleteUser = user => {
//     Swal.fire({
//         title: "Are you sure?",
//         text: "You won't be able to revert this!",
//         icon: "warning",
//         showCancelButton: true,
//         confirmButtonColor: "#3085d6",
//         cancelButtonColor: "#d33",
//         confirmButtonText: "Yes, delete it!"
//     }).then((result) => {
//         if (result.isConfirmed) {
//             axiosSecure.delete(`/agreement/${user._id}`)
//                 .then(res => {
//                     if (res.data.deletedCount > 0) {
//                         // refetch();
//                         Swal.fire({
//                             title: "Deleted!",
//                             text: "Your file has been deleted.",
//                             icon: "success"
//                         });
//                     }
//                 })
//         }
//     });
// }
//  const [ count , setCount]=useState()
//  console.log(count);


// useEffect( () =>{
//     fetch('https://building-management-server-wheat.vercel.app/agreement')
//     .then(res => res.json())
//     .then(data => setCount(data.count))
// }, [])



    return (
        <div className=" lg:w-auto sm:w-[800px] ">
        <div className="flex justify-evenly ">
            <h2 className="text-xl">All Users</h2>
            <h2 className="text-xl">Total Users: {users.length}</h2>
        </div>
        <div className="overflow-x-auto">
            <table className="table table-zebra ">
                {/* head */}
                <thead>
                    <tr>
                        <th></th>
                        <th>Image :</th>
                        <th>Apperment :</th>
                        <th>Email :</th>
                        <th>Name :</th>
                        <th>Floor no :</th>  
                        <th>Block name:</th>                    
                        <th>Role</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((user, index) => <tr key={user._id}>
                            <th>{index + 1}</th>
                            <td> <img className="w-24 h-14 rounded-2xl" src={user.img} alt="" /> </td>
                            <td>{user.apt}</td>
                            <td>{user.email}</td>
                            <td>{user.name}</td>
                            <td>{user.flr}</td>
                            <td>{user.blk}</td>
                            
                           
                            <td>
                                { user.role === 'admin' ? 'Admin' : <button
                                    // onClick={() => handleMakeAdmin(user)}
                                    className="btn btn-sm btn-outline bg-orange-400">
                                    <IoPersonAddSharp  className="text-white 
                                    text-2xl"></IoPersonAddSharp> Accept
                                </button>}
                            </td>
                            <td>
                            <button
                                        // onClick={() => handleDeleteUser(user._id)}
                                        className="btn btn-ghost btn-lg">
                                        <FaTrashAlt className="text-red-600">delete </FaTrashAlt>
                                    </button>
                            </td>
                        </tr>)
                    }

                </tbody>
            </table>
        </div>
    </div>
    );
};

export default Request;