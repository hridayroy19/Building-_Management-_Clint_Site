// import Swal from "sweetalert2";
import Swal from "sweetalert2";
import useaxiosSecure from "../hookes/axiosSecure";


const MakeAnnoucemnet = () => {
const axiosSecure = useaxiosSecure()
    const handleSub = (event) => {
        event.preventDefault();
        console.log("hello");
        const form = event.target;
        const title = form.title.value;
        const discription = form.discription.value;
        const dataInfo = {
           title,
           discription
        }
    axiosSecure.post('/announsment', dataInfo)
.then(res =>{
  console.log(res.data);
  if(res.data.insertedId){
    Swal.fire({
        position: "top-end",
        icon: "success submite",
        title: "Your work has been saved",
        showConfirmButton: false,
        timer: 1500
      });
  }
})
    }




    return (
        <div className="hero ">
        <div className="hero-content">
          <div className="text-center">
          </div>
        
          <div className="card shrink-0 w-[500px] shadow-xl bg-base-100">
          <h2 className="text-center text-2xl font-bold underline text-orange-400">Make Announcement</h2>
            <form onSubmit={handleSub} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Title</span>
                </label>
                <input type="text" name="title" placeholder="Type here" className="input input-bordered input-info " />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Discripton</span>
                </label>
                <textarea className="textarea textarea-primary" name="discription" placeholder="Bio"></textarea>
              </div>
              <div className="form-control mt-6">
                <button type="submit" className="btn btn-outline btn-success">Submite</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
};

export default MakeAnnoucemnet;