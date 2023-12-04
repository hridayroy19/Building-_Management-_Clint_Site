import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import useaxiosSecure from "../hookes/axiosSecure";
import { useQuery } from "@tanstack/react-query";

const PaymentHistory = () => {
    const { user}=useContext(AuthContext);
    const axiosSecure=useaxiosSecure()

    const { data: payments = [] } = useQuery({
        queryKey: ['payments', user.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/payments/${user.email}`)
            return res.data;
        }
    })


    return (
        <div className="ml-14"> 
        <h2 className=" lg:text-xl text-center mt-8 font-bold">Total Payments: {payments.length}</h2>
        <div className="overflow-x-auto w-[450px] lg:w-[1000px] ">
            <table className="table table-zebra gap-3">
                {/* head */}
                <thead>
                    <tr className=" lg:text-xl text-black font-bold">
                        <th>#</th>
                        <th>price</th>
                        <th>Transaction Id</th>
                        <th className="">Status</th>
                    </tr>
                </thead>
                <tbody className="gap-3">
                    {payments.map((payment, index) => <tr key={payment._id}>
                        <th>{index + 1}</th>
                        <td>${payment.price}</td>
                        <td>{payment.transactionId}</td>
                        {/* <td className="btn btn-outline items-center ">{payment.status}</td> */}
                        <button className="btn text-black btn-outline border-0 border-b-4 mt-6 ">{payment.status} </button>
                    </tr>)}
                    
                </tbody>
            </table>
        </div>
    </div>
    );
};

export default PaymentHistory;