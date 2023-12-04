
import { Elements } from "@stripe/react-stripe-js";
import ChekeFrome from "./ChekeFrome";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_KEY);
const Payment = () => {
    return (
        <div className="mt-[20%] ">
            <h1 className="text-center font-black text-2xl "> payment section </h1>
            <div className=" mt-11 ml-[25%] w-[400px]">
                <Elements stripe={stripePromise}>
                   <ChekeFrome></ChekeFrome>
                </Elements>
            </div>
        </div>
    );
};

export default Payment;