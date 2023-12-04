// import { useLoaderData } from "react-router-dom";
import Rooms from "../components/roomsCard/Rooms";
import { useEffect, useState, } from "react";
import './Appeerment.css';
const Apperment = () => {
    // const manu = useLoaderData();
    const [count, setCount] = useState(0)
    const [currentPage, setCurrentPage] = useState(0);
     const [products, setProducts] = useState([]);
    //  const [itemsPerPage, setItemsPerPage] = useState(6);
    // console.log(count);

    useEffect( () =>{
            fetch('https://building-management-server-wheat.vercel.app/romesCount')
            .then(res => res.json())
            .then(data => setCount(data.count))
        }, [])
        const itemsPerPage= 6;
        const numberOfPages = Math.ceil(count / itemsPerPage);
        const pages = [...Array(numberOfPages).keys()];

        const handlePrevPage = () => {
                if (currentPage > 0) {
                    setCurrentPage(currentPage - 1);
                }
            }
            const handleNextPage = () => {
                    if (currentPage < pages.length - 1) {
                        setCurrentPage(currentPage + 1);
                        }}


                        useEffect(() => {
                                fetch(`https://building-management-server-wheat.vercel.app/rooms?page=${currentPage}&size=${itemsPerPage}`)
                                    .then(res => res.json())
                                    .then(data => setProducts(data))
                            }, [currentPage, itemsPerPage])
 


// const handleItemsPerPage = e => {
//     const val = parseInt(e.target.value);
//     console.log(val);
//     setItemsPerPage(val);
//     setCurrentPage(0);
// }
                

    return (
        <div className=" grid grid-cols-1 md:grid-cols-2 w-[1300px] mb-9 mt-8 gap-6 mx-auto lg:grid-cols-3">

            {
                products.map(manu => <Rooms key={manu._id} manu={manu}></Rooms>)
            }


        <div className="pagination justify-center items-center text-center" >
            <p> current page: {currentPage} </p>
            <button className="btn btn-outline btn-sm" onClick={handlePrevPage} > prev</button>
            
            {
            
            pages.map(page=><button className={currentPage ===page ? 'selected' :undefined} onClick={()=> setCurrentPage(page)} key={page}>{page} </button>)

            }
            <button className="btn btn-outline btn-sm" onClick={handleNextPage}>Next</button> 
        </div>

        </div>
    );
};

export default Apperment;