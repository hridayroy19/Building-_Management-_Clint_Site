import Swal from "sweetalert2";
import useCart from "../hookes/useCart";
import { MdDelete } from "react-icons/md";
import useaxiosSecure from "../hookes/axiosSecure";
import { Link } from "react-router-dom";


const Announcements = () => {
    const [cart , refetch]=useCart()
    const totalPrice = cart.reduce((total, item) => total+item.rent, 0);
    const axiosSecure = useaxiosSecure()
   
    const handleDelete = id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"})
             .then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/agreement/${id}`)
                    .then(res => {
                        if (res.data.deletedCount> 0) {
                            refetch()
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                        console.log(res);
                    })
            }
        });

    }


    return (
        <div>
            <div className="flex mb-6 font-bold uppercase justify-evenly items-center text-center ">
                <h2> Items :{cart.length} </h2>
                <h2> Total Price : {totalPrice} </h2>
                {cart.length ? <Link to="/dashboard/payment">
                    <button className="btn btn-primary">Pay</button>
                </Link>:
                <button disabled className="btn btn-primary">Pay</button>
                }
            </div>
            <div className="overflow-x-auto border  border-double">
                <table className="table lg:w-[800px]">
                    {/* head */}
                    <thead>
                        <tr className="text-xl text-black">
                            <th>
                                #
                            </th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            cart.map((cart, index) => <tr key={cart._id}>
                                <th>
                                    {index + 1}
                                </th>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={cart.img} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {cart.blk}
                                </td>
                                <td>${cart.rent}</td>
                                <th>
                                    <button
                                        onClick={() => handleDelete(cart._id)}
                                        className="btn btn-ghost btn-lg">
                                        <MdDelete className="text-red-600"></MdDelete>
                                    </button>
                                 
                                </th>
                            </tr>)
                        }


                    </tbody>
                </table>
            </div>
        </div>
        
    );
};

export default Announcements;