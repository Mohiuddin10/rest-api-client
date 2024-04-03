
const Users = () => {
    const handleAddUser = (e) => {
        e.preventDefault();
        const form = e.target;
        const userName = form.userName.value;
        const email = form.email.value;
        const newUser = {
            userName: userName,
            email: email
        }
        console.log(newUser);
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
                                <span className="label-text">User email</span>
                            </label>
                            <input type="email" placeholder="user email" className="input input-bordered" name="email" required />
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