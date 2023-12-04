import { BsFillChatSquareFill, BsFillEnvelopeFill, BsFillTelephoneFill} from "react-icons/bs";

const Faq = () => {
    return (
        <div className=" grid md:grid-cols-2 lg:w-full md:w-[60%] w-[33%] mt-12 grid-cols-1 ">
            <div className=" ml-16 mb-3 lg:ml-1" >
                <h2 className=" font-bold text-xl lg:text-2xl">Ask Our Team</h2>
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

</div>



  <div className=" lg:w-full md:w-[33%] ">

<h2 className=" font-bold lg:text-2xl text-center  text-xl md:text-xl mb-3">
Frequently Asked Questions
</h2>

<div className="collapse mt-5 mb-3 collapse-arrow bg-base-200">
  <input type="radio" name="my-accordion-2" checked="checked" /> 
  <div className="collapse-title lg:text-xl font-medium">
  Management refers to the process of planning,
  </div>
  <div className="collapse-content"> 
    <p>organizing, directing, and controlling resources  <br />
     organizational goals effectively and efficiently. </p>
  </div>
</div>
<div className="collapse mb-3 collapse-arrow bg-base-200">
  <input type="radio" name="my-accordion-2" /> 
  <div className="collapse-title lg:text-xl font-medium">
  What are the key functions of management
  </div>
  <div className="collapse-content"> 
    <p>The primary functions of management include:

Planning: Setting objectives and determining the best course of action. <br />
Organizing: Structuring resources and tasks to achieve goals..</p>
  </div>
</div>
<div className="collapse mb-3 collapse-arrow bg-base-200">
  <input type="radio" name="my-accordion-2" /> 
  <div className="collapse-title lg:text-xl font-medium">
  What skills are essential for effective management?
  </div>
  <div className="collapse-content"> 
    <p> Effective managers typically possess skills such as leadership, communication, problem-solving, decision-making, strategic <br />
     thinking, delegation, and time management.</p>
  </div>
</div>
<div className="collapse collapse-arrow bg-base-200">
  <input type="radio" name="my-accordion-2" /> 
  <div className="collapse-title lg:text-xl font-medium">
  How does effective communication impact 
  </div>
  <div className="collapse-content"> 
    <p>Communication is crucial in management as it ensures clarity, alignment of goals, instructions, and feedback among team members. Clear communication fosters collaboration and prevents misunderstandings.</p>
  </div>
</div>

            </div>
        </div>
    );
};

export default Faq;