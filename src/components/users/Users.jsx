import axios from "axios";

const Users = () => {
    const handleAddUser = (e) => {
        e.preventDefault();
        const form = e.target;
        const userName = form.userName.value;
        const age = form.age.value;
        const newUser = {
            userName: userName,
            age: age
        }
        console.log(newUser);
        // axios({
        //     method: "post",
        //     url: 'http://localhost:5000/api/users',
        //     newUser: newUser
        // })

        fetch('http://localhost:5000/api/users', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newUser)
        })
        .then(res => res.json())
        .then(data => console.log(data))
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Add User</h1>
                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleAddUser} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="User name" name="userName" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">User age</span>
                            </label>
                            <input type="number" placeholder="user age" className="input input-bordered" name="age" required />
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-primary" type="submit" value="Add User" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Users;