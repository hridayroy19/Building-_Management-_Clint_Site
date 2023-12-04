import About from "../components/home-components/About";
import CuponSection from "../components/home-components/CuponSection";
import Faq from "../components/home-components/Faq";
import Map from "../components/home-components/Map";
import Banner from "../sheard/Banner/Banner";
const Home = () => {
    return (
        <div className=" w-[1200px] mx-auto ">
            {/* <h2 className=" items-center text-center text-2xl uppercase font-bold mt-4 mb-10">
            about the building 
            </h2> */}
              <Banner></Banner>
           <div className="mt-10">
           <About></About>
           </div>
            <CuponSection></CuponSection>
             <Map></Map>
             <div className="mt-6 mb-16">
                <Faq></Faq>
             </div>
      
            
        </div>
    );
};

export default Home;