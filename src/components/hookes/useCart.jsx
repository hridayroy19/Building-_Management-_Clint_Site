import { useQuery } from "@tanstack/react-query";
import useaxiosSecure from "./axiosSecure";
import useAuth from "./useAuth";


const useCart = () =>  {
    const axiosSecure = useaxiosSecure();
    const { user} = useAuth();
    const { refetch, data: cart = [] } = useQuery({
        queryKey: ['cart', user?.email],
        queryFn: async() => {
            const res = await axiosSecure.get(`/agreement?email=${user.email}`);
            return res.data;
        }
    })

    return [cart, refetch]
};

export default useCart;