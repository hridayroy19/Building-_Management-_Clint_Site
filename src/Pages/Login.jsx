// import { FaFacebook, FaGoogle } from "react-icons/fa6";
// import { FcGoogle } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa6";

import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import toast from "react-hot-toast";
import useAxiosPublic from "../components/hookes/useAxiosPublic";
// import { Link } from "react-router-dom";

const Login = () => {
  const { sigIn, googleSignIn } = useContext(AuthContext);
  const axiosPublic = useAxiosPublic();

  const navigate = useNavigate();
  //  const loaction = useLocation();

  //  const from = loaction.state?.from?.pathname || "/";

  const handleLogin = (event) => {
    event.preventDefault();
    console.log("hello");
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    sigIn(email, password).then((result) => {
      const user = result.user;
      console.log(user);
      toast("Success full login!", {
        icon: "👏",
      });
      navigate("/");
      // navigate(from, {replace:true})
    });
  };

  const handleGoogleSignIn = () => {
    googleSignIn().then((res) => {
      console.log(res.user);
      const userInfo = {
        name : res.user?.displayName,
        email: res.user?.email,
      };
      axiosPublic.post('/users', userInfo)
      .then(res =>{
        console.log(res.data)
        navigate("/");
      })
    });
  };

  return (
    <div
      className="hero opacity-70 w-full min-h-screen"
      style={{
        backgroundImage:
          "url(https://i.ibb.co/47JbGKx/360-F-21708280-RFKz4-O7-Im-Qlu-B9-Fg-X2m-UYFUNDml-Lok-X6.jpg)",
      }}
    >
      <div className="hero-overlay bg-opacity-10"></div>
      <div className="hero-content  text-center text-neutral-content">
        <div className=" md:w-[600px] w-[400px] rounded-xl border bg-gray-500 ">
          <div className="hero rounded-xl opacity-80 md:py-5  text-black ">
            <div className="hero-content  md:gap-16 items-center text-center rounded lg:flex-row">
              <div className="avatar">
                <div className=" md:w-36 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                  <img src=" https://i.ibb.co/p3vCR2s/istockphoto-1300845620-612x612.jpg" />
                </div>
              </div>
              <div className="">
                <form onSubmit={handleLogin}>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text text-white font-bold text-xl ">
                        Email
                      </span>
                    </label>
                    <input
                      type="email"
                      placeholder="email"
                      name="email"
                      className="input required: input-bordered"
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text text-white font-bold text-xl ">
                        Password
                      </span>
                    </label>
                    <input
                      type="password"
                      placeholder="password"
                      name="password"
                      required
                      className="input input-bordered"
                    />
                    <label className="label">
                      <a
                        href="#"
                        className="label-text-alt link link-hover font-bold "
                      >
                        Forgot password?
                      </a>
                    </label>
                  </div>
                  <div className="form-control mt-6">
                    <button className="btn btn-primary">Login</button>
                  </div>
                </form>
                <p>
                 
                  New Here ? <Link to={"/register"}> Register</Link>
                </p>
                <div
                  onClick={handleGoogleSignIn}
                  className="flex justify-center bg-gray-800 text-white items-center space-x-2 border m-3 p-2 border-blue-300 border-rounded cursor-pointer"
                >
                  <FaGoogle size={32} />

                  <p>Continue with Google</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
