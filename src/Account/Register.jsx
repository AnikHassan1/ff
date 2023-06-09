import React from 'react';
import { Link } from 'react-router-dom';


import { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';


const Register = () => {
    const { user, createUser } = useContext(AuthContext)
   console.log          (user)
    const handleRegisterBtn = e => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photoURL = form.photoURL.value;
        console.log(email, password, name, photoURL);
        createUser(email, password)
            .then(result => {
                const loginUser = result.user;
                console.log(loginUser);
                form.reset()
            })
            .catch(error => {
                console.log(error);
            })
           
    }

    return (
        <div className='lg:flex justify-between'>
            <div>
                <img className='rounded-xl shadow-xl' src="../../../../public/images/register.png" alt="" />
            </div>
            <div className="hero  bg-base-200">
                <div className="hero-content flex-col ">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Please Register !</h1>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleRegisterBtn} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name='name' placeholder="name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" required />

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Photo URL</span>
                                    </label>
                                    <input type="photoURL" name='photoURL' placeholder="photoURL" className="input input-bordered" required />
                                </div>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Register </button>
                            </div>
                            <label className="label">
                                <Link to="/Login" className="label-text-alt link link-hover text-gray-900 font-bold">Already Have a Account ? please login Now</Link>
                            </label>
                        </form>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Register;