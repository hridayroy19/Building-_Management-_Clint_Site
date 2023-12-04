// import cuponImage from ".././home-components/cupon.css"
// import cuponImage from "../../components/home-components/cupon"
// import './cupon.css'
const CuponSection = () => {
    return (
        <div className="featured-item bg-fixed lg:w-full md:w-[60%] w-[33%] text-white mb-8 mt-8 ">
        <div className='text-center mx-auto mt-8 items-center'>
            <h2 className="text-black md:text-xl lg:text-3xl font-bold mb-8 ">Access exclusive discounts</h2>
    </div>
  <div className=" grid lg:grid-cols-2 md:grid-cols-1 items-center   bg-gray-500  px-14 py-12 justify-center">
  <div>
   <img className=" lg:w-[70%] w-[100%] mb-7 "  src="https://i.ibb.co/pJ5rmL5/8084210.jpg" alt="" />
   </div>

   <div className=" md:mt-5">
    <button className="btn btn-outline lg:text-xl bg-black btn-secondary">Cupon Code : MI2023 </button>
    <h2>WHERE CAN I GET SOME?</h2>
    <p>By using Coupon Park, you gain access to exclusive <br />
     discounts for building management services. Whether you need cleaning, <br />
      landscaping, or security services, our coupons will help you save money <br />
       while getting the best quality services for your building.</p>
    <button className="btn text-red-300  btn-outline border-0 border-b-4 mt-6 "> Read More </button>
   </div>
  </div>
    </div>
    );
};

export default CuponSection;