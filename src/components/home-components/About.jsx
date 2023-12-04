
const About = () => {
    return (
<div>
<div className="hero w-full bg-slate-200 mb-9 ">
<div className="hero-content grid lg:grid-cols-2 sm:grid-cols-2 md:grid-cols-2 gap-5 lg:gap-12">
 <div  data-aos="fade-right" className="  relative">
 <img src="https://i.ibb.co/4Jk0nTp/facility-management-services.jpg" className=" lg:w-full w-[35%] " alt="" />
 </div>
  <div data-aos="fade-left ">
  <div className=" lg:w-full w-[30%] ">
  <h3 className="text-red-500 lg:text-3xl font-bold">
    About Us
    </h3>
    <h1 className="  lg:text-2xl md:text-xl text-xl font-bold"> Streamline building <br /> management processes </h1>
    <p className="py-2 lg:w-full sm:w-[30%] md:w-full ">BuildingHub offers a range of tools and services that streamline <br />
     building management processes. From maintenance requests to tenant communication,<br />
      our platform simplifies the entire workflow, saving you time and effort. </p>
    <p className="py-2  lg:w-full sm:w-[33%] md:w-full ">
    With BuildingHub, you can enhance the efficiency and productivity of <br />
     your building management operations. Our tools automate repetitive tasks, provide real-time data and analytics,<br />
      and enable seamless collaboration among team members.
    </p>
    <button className="btn bg-[#FF3811] text-white  ">Get More Info</button>
  </div>
  </div>
</div>
</div>
</div>
    );
};

export default About;