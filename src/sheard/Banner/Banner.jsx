// import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

const Banner = () => {
    return (
        <div className="carousel border lg:w-full md:w-[60%] w-[33%] mb-11 mt-5 mx-auto ">
    <div id="slide1" className="carousel-item relative lg:w-full">
    <img src="https://i.ibb.co/9WB8zf1/72703622-businessman-ment.jpg" className=" lg:w-full w-[100px] " />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative  lg:w-full">
    <img src="https://i.ibb.co/YkTsDKh/chief-engineer-project-manager-wearing-260nw-1902078652.webp" className="lg:w-full w-[100px]  " />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div> 
  </div>  
  <div id="slide3" className="carousel-item relative lg:w-full">
    <img src="https://i.ibb.co/TcGS6K6/png-clipart-building-automation-g-engineering-thumbnail.png" className="lg:w-full w-[100px] " />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide4" className="carousel-item relative lg:w-full ">
    <img src="https://i.ibb.co/pw63LgR/png-clipart-building-management-system-building-thumbnail.png" className="lg:w-full w-[100px] " />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>


    );
};

export default Banner;