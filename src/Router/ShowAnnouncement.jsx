import { useLoaderData } from "react-router-dom";


const ShowAnnouncement = () => {
    const history = useLoaderData()
    // console.log(history);
    return (

   <div className="grid md:ml-5 grid-cols-1 lg:grid-cols-2 w-52  lg:w-[1000px] gap-4">
         {
            history.map(history => <div key={history._id} className="card bg-gray-500 text-primary-content">
            <div className="card-body">
              <h2 className="card-title text-white text-xl">{history.title}</h2>
              <p>{history.discription} </p>
              <div className="card-actions justify-end">
                <button className="btn btn-outline">Reed more</button>
              </div>
            </div>
          </div>)
        }
   </div>
 
    );
};

export default ShowAnnouncement;