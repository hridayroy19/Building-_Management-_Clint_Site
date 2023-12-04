import { BsFillChatSquareFill, BsFillEnvelopeFill, BsFillTelephoneFill} from "react-icons/bs";
const Contact = () => {
    return (
        <div className=" grid items-center ml-9  grid-cols-1 md:grid-cols-2">
            <div>
            <div className=" ml-16 mb-3 lg:ml-1" >
                <h2 className=" font-bold text-2xl">Ask Our Team</h2>
                 <p className=" mt-2 font-semibold"> Want to contact us directly? No problem. <br />
                  We are always here for you.</p>

                  <div className="avatar-group mt-6 -space-x-6">
  <div className="avatar">
    <div className="w-12">
      <img src="https://i.ibb.co/LzWxcQc/assignment-helps-fbdf10d1.webp" />
    </div>
  </div>
  <div className="avatar">
    <div className="w-12">
      <img src="https://i.ibb.co/7zn0Gc0/editing-help-service-d5ba1cce.webp" />
    </div>
  </div>
  <div className="avatar">
    <div className="w-12">
      <img src="https://i.ibb.co/8NSMWkR/every-student-ment-f7a30282.webp" />
    </div>
  </div>
  <div className="avatar placeholder">
    <div className="w-12 bg-neutral-focus text-neutral-content">
      <span>+99</span>
    </div>
  </div>
</div>  
<div className="mt-9">
    <div className="flex items-center gap-2">
    <BsFillTelephoneFill></BsFillTelephoneFill>
    <p className="  font-bold">  0177770077</p>
         
    </div>
    <div className="flex items-center gap-2">
        <BsFillEnvelopeFill></BsFillEnvelopeFill>
        <h2>hrhridoyroy@gmail.com </h2>
    </div>
    

    <button className="btn mt-6 bg-green-500 btn-outline btn-secondary"> <span><BsFillChatSquareFill></BsFillChatSquareFill></span> Start Live chart</button>

</div>


            </div></div>
            <div>
            <div className="hero ">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="card shrink-0 w-full max-w-sm  bg-base-100">
      <div className="card-body grid gap-4 grid-cols-2">
        <div className="form-control  ">
          <input type="text" placeholder="Your name" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <input type="text" placeholder="Email Address" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <input type="text" placeholder="Phone Namber" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <input type="text" placeholder="Subjcet" className="input input-bordered" required />
        </div>
        <div className="form-control">
        <textarea className="textarea textarea-accent w-[330px] " placeholder="Bio"></textarea>
        </div>
      </div>
      <button className=" btn btn-block btn-outline">  submite </button>
    </div>
  </div>
</div>
            </div>
        </div>
    );
};

export default Contact;