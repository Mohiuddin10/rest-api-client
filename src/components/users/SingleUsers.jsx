import { BsFillPencilFill } from "react-icons/bs";

const SingleUsers = ({ user }) => {
    // console.log(name);
    const { name, age } = user;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">
                    Name: {name}
                </h2>
                <p>Age: {age}</p>
                <div className="card-actions justify-end">
                    <button></button>
                    <button className="btn btn-square btn-outline">
                        <BsFillPencilFill />
                    </button>
                    <button className="btn btn-square btn-outline">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SingleUsers;