import axios from "axios";
import { useEffect, useState } from "react";
import SingleUsers from "./SingleUsers";

const AllUsers = () => {
    const [users, setUsers] = useState([]);
    // useEffect(() => {
    //     axios.get('http://localhost:5000/api/users')
    //         .then(data => setUsers(data.data))
    // }, [])
    const url = "http://localhost:5000/api/users";
   


    useEffect(() => {
        axios.get(url)
            .then(data => setUsers(data.data))
    }, []);
    return (
        <div>
            <h2 className="">Users found: {users.length}</h2>
            <div className="grid md:grid-cols-3">
                {
                    users.map(user => <SingleUsers
                        key={user.id}
                        user={user}></SingleUsers>)
                }
            </div>
        </div>
    );
};

export default AllUsers;