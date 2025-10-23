import React, { use, useEffect, useRef } from 'react'
import { Navigate, useLocation, useNavigate } from 'react-router'
import Swal from 'sweetalert2'
import { AuthContext } from '../provider/AuthProvider'

const ForgetPass = () => {

    const { getPasswordResetEmail } = use(AuthContext)
    const emailRef = useRef()
    const location = useLocation()
    const navigate = useNavigate()

    useEffect(() => {
        if (location.state?.email) {
            emailRef.current.value = location.state.email
        }
    }, [location.state])

    const handleResetPassword = (e) => {
        e.preventDefault()
        const email = emailRef.current.value

        if (!email) {
            Swal.fire({
                title: "Warning!",
                text: "Please enter your email first.",
                icon: "warning"
            })
            return
        }

        getPasswordResetEmail(email)
            .then(() => {
                Swal.fire({
                    title: "Success!",
                    text: "Password reset email sent successfully. Redirecting you to Gmail...",
                    icon: "success",
                    timer: 2500,
                })
                setTimeout(() => {
                    window.open("https://mail.google.com", "_blank")
                    navigate("/login")
                }, 2500)
            })
            .catch((error) => {
                Swal.fire({
                    title: "Error!",
                    text: error.message,
                    icon: "error"
                })
            })

    }

    return (
        <div className='flex justify-center py-20'>

            <title>login | FunVille Toys</title>

            <div className='fieldset bg-base-300 border-base-300 rounded-box w-xs border p-4'>
                <form onSubmit={handleResetPassword}>
                    <h1 className='text-2xl font-bold text-center mb-5'>Reset Your Password</h1>

                    <label className="label">Email Adress</label>
                    <input type="email" name="email" className="input" placeholder="Email" ref={emailRef} />

                    <button type="submit" className="btn btn-accent w-full text-white mt-3">Reset Password</button>

                </form>
            </div>
        </div>
    )
}

export default ForgetPass