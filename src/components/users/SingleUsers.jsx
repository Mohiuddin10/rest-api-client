import { BsFillPencilFill } from "react-icons/bs";
import SingleUserDisplay from "./SingleUserDisplay";
import axios from "axios";
import Swal from "sweetalert2";

const SingleUsers = ({ user, deleteUser }) => {
    const { name, age, id } = user;

    const handleDelete = id => {
        axios.delete(`http://localhost:5000/api/users/${id}`)
            .then(res => {
                if (res.status === 200) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `${name} has been deleted from Database`,
                        showConfirmButton: false,
                        timer: 1500
                    });
                    deleteUser(id);
                }
            })
    }

    const handleSingleUserDisplay = (id) => {
        // fetch(`http://localhost:5000/api/users/${id}`)
        // .then(res => res.json())
        // .then(data => <SingleUserDisplay
        // key={data.id}
        // data={data}></SingleUserDisplay>)

        <SingleUserDisplay
            key={id}
            id={id}></SingleUserDisplay>
    }
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">
                    Name: {name}
                </h2>
                <p>Age: {age}</p>
                <div className="card-actions justify-end">
                    <button onClick={() => handleSingleUserDisplay(id)} className="btn btn-success">Show Details</button>
                    <button className="btn btn-square btn-outline">
                        <BsFillPencilFill />
                    </button>
                    <button onClick={() => handleDelete(id)} className="btn btn-square btn-outline">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SingleUsers;