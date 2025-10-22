import React, { use } from 'react'
import { Link, useLocation, useNavigate } from 'react-router'
import { AuthContext } from '../provider/AuthProvider'
import Swal from 'sweetalert2'


const Login = () => {

    const { signIn, signInWithGoogle, setUser } = use(AuthContext)
    const location = useLocation()
    const navigate = useNavigate()

    const handleSignIn = (e) => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;



        signIn(email, password)
            .then((result) => {

                const user = result.user;
                form.reset()

                Swal.fire({
                    title: "Login Successful!",
                    text: `Welcome Back!`,
                    icon: "success"
                });

                navigate(`${location.state ? location.state : "/"}`)

            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;

                Swal.fire({
                    title: 'Ooppss!',
                    text: errorMessage,
                    icon: 'error'
                });
            });
    }

    const hangelGoogleSignIn = () => {
        signInWithGoogle()
            .then(result => {
                const user = result.user;
                setUser(user);
                Swal.fire({
                    title: "Login Successful!",
                    text: `Welcome ${user.displayName || "User"}!`,
                    icon: "success"
                });
                navigate("/");
            })
            .catch(error => {
                Swal.fire({
                    title: "Oops!",
                    text: error.message,
                    icon: "error"
                });
            });
    }


    return (
        <div className='flex justify-center py-20'>

            <title>login | FunVille Toys</title>

            <div className='fieldset bg-base-300 border-base-300 rounded-box w-xs border p-4'>
                <form onSubmit={handleSignIn}>
                    <h1 className='text-2xl font-bold text-center mb-5'>Login Your Accout</h1>

                    <label className="label">Email Adress</label>
                    <input type="email" name="email" className="input" placeholder="Email" />

                    <label className="label">Password</label>
                    <input type="password" name="password" className="input" placeholder="Password" />

                    <a>Forgot Password?</a>
                    <button className="btn btn-accent w-full text-white mt-3">Login</button>
                    <button onClick={hangelGoogleSignIn} className="btn bg-white mt-2 w-full text-black border-[#e5e5e5]">
                        <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                        Login with Google
                    </button>
                    <p className='mt-3'>Doesn't have an account? <Link to="/register"><span className='text-secondary'>Register</span></Link></p>
                </form>
            </div>
        </div>
    )
}

export default Login