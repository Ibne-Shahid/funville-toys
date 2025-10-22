import React from 'react'
import { Link } from 'react-router'

const Login = () => {
    return (
        <div className='flex justify-center py-20'>
            <div className='fieldset bg-base-300 border-base-300 rounded-box w-xs border p-4'>
                <form>
                    <h1 className='text-2xl font-bold text-center mb-5'>Login Your Accout</h1>
                    <label className="label">Email Adress</label>
                    <input type="email" className="input" placeholder="Email" />

                    <label className="label">Password</label>
                    <input type="password" className="input" placeholder="Password" />

                    <p className='text-center mt-3'>Forgot Password?</p>
                    <div className='text-center'><button className="btn btn-accent text-white mt-3">Login</button></div>
                    <p className='mt-3'>Doesn't have an account? <Link to="/register"><span className='text-secondary'>Register</span></Link></p>
                </form>
            </div>
        </div>
    )
}

export default Login