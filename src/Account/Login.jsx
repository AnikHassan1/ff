import React, { useRef } from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';

import { sendPasswordResetEmail } from 'firebase/auth';
import { AuthContext } from '../Provider/AuthProvider';
// import { getApp } from 'firebase/app';
// import app from '../../../firebase.confiq';

// const auth=getApp(app)
const Login = () => {
  
    const emailRef = useRef()
    const { signin, SignInWithGoogle } = useContext(AuthContext)
    const handleLoginBtn = e => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        // form.reset()
        signin(email, password)
            .then(result => {
                const logUser = result.user;
                console.log(logUser);
                form.reset()
            })
            .catch(error => {
                console.log(error);
            }

            )
    }
    const handleGooglebtn = () => {
        SignInWithGoogle()
            .then(result => {
                const loguser = result.user;
                console.log(loguser);
            })
            .catch(error => {
                console.log(error);
            })
    }
    const handleResetBtn = e => {
        //   console.log(emailRef.current.value);
        const email = emailRef.current.value;
        if (!email) {
            alert('provid your email')
        }
        sendPasswordResetEmail(auth, email)
            .then(() => {
                alert("email cheak")
            })
            .catch(error => {
                console.log(error);
            })
    }
    return (
        <div className='lg:flex justify-between'>
            <div>
                <img className='rounded-xl shadow-xl lg:ml-20 mt-5' src="../../../../public/images/login.jpg.jpg" alt="" />
            </div>
            <div className="hero ">
                <div className="hero-content flex-col ">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Please Login !</h1>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleLoginBtn} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input
                                    ref={emailRef}
                                    type="email" name='email' placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a onClick={handleResetBtn} href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-1">
                                <button className="btn btn-primary">Login</button>
                            </div>
                        </form>
                        <Link to='/Register' className="label-text-alt link link-hover text-gray-900 font-bold text-center mb-5">
                            New To Toy ! Please Register
                        </Link>
                        {/* className="label-text-alt link link-hover text-red-400 font-bold text-center mb-5 border border-2" */}
                        <Link to="/" onClick={handleGooglebtn} >
                            <div className='flex border border-x-slate-400 rounded-xl mb-2 mx-3 shadow-2xl'>
                                <img className='rounded-full ' src="../../../../public/google.png (2).png"alt="" />
                                <div className='font-semibold pl-10 pt-2'>
                                    Google Login
                                </div>
                            </div>

                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;