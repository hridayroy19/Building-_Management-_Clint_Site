import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import useAxiosPublic from "../components/hookes/useAxiosPublic";


const Register = () => {
  const axiosPublic =useAxiosPublic()

const { creatuser , updateUserProfile } = useContext(AuthContext);
const navigate = useNavigate()
    const handleRegister= event =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photo = form.url.value;
        const email = form.email.value;
        const password = form.password.value;
        const data ={
          name ,
          email,
          photo,
          password
        }
        console.log(data);
     creatuser(data.email , data.password , data.name, data.photo)
     .then(result =>{
      const loggedUser = result.user;
      console.log(loggedUser)
      updateUserProfile(data.name , data.photo)
      .then(()=>{
        // send database information
          const userInfo ={
            name: data.name,
              email: data.email ,
              photo:data.photo        
          }
           axiosPublic.post('/users', userInfo)
           .then(res =>{
            if(res.data.insertedId){
              console.log('user add to the database');
              toast('Success full Register!', {
                icon: '👏',
              });
             navigate("/")
            }
           })
      
      })
      .catch(error => console.log(error));
     })
    
      }


    return (
        <div className="hero opacity-70 w-full min-h-screen" style={{backgroundImage: 'url(https://i.ibb.co/47JbGKx/360-F-21708280-RFKz4-O7-Im-Qlu-B9-Fg-X2m-UYFUNDml-Lok-X6.jpg)'}}>
        <div className="hero-overlay bg-opacity-10"></div>
        <div className="hero-content  text-center text-neutral-content">
          <div className=" md:w-[800px] w-[400px] rounded-xl border bg-gray-500 ">
      
          <div className="hero rounded-xl opacity-80 md:py-5  text-black ">
        <div className="hero-content  md:gap-24 items-center text-center rounded lg:flex-row">
        <div className="avatar">
        <div className=" md:w-48 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
          <img src=" https://i.ibb.co/p3vCR2s/istockphoto-1300845620-612x612.jpg" /> 
      
        </div>
      </div>
          <div className="">
          <form  onSubmit={handleRegister} >
          <div className="form-control">
                <label className="label">
                  <span className="label-text text-white font-bold text-xl ">Name</span>
                </label>
                <input type="text" placeholder="name" name="name"  className="input required: input-bordered" />
              </div>
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text text-white font-bold text-xl ">Email</span>
                      </label>
                      <input type="email" placeholder="email" name="email"  className="input required: input-bordered" />
                    </div>
                    {/* image */}
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text text-white font-bold text-xl ">photo url</span>
                      </label>
                      <input type="url" placeholder="photo url" name="url"  className="input required: input-bordered" />
                    </div>

                    <div className="form-control">
                      <label className="label">
                        <span className="label-text text-white font-bold text-xl ">Password</span>
                      </label>
                      <input type="password" placeholder="password"  name="password" required className="input input-bordered" />
                      <label className="label">
                     <a href="#" className="label-text-alt link link-hover font-bold ">Forgot password?</a>
                       </label>
                    </div>
                    <div className="form-control mt-6">
                      <button className="btn btn-primary">Login</button>
                    </div>
               </form>
               <p>  All Ready Have a acount <Link to={"/login"}> Login</Link> </p>
               <div>
                <button className="btn btn-outline mt-3">  socal login </button>
               </div>
          </div>
        </div>
      </div>
      
      
        
          </div>
        </div>
      </div>
    );
};

export default Register;