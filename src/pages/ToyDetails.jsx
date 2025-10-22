import React from 'react'
import { useParams } from 'react-router'

import { FaStar, FaStarHalf } from 'react-icons/fa'
import { BiCartAdd } from 'react-icons/bi'
import Swal from 'sweetalert2'
import useFetchData from '../hooks/useFetchData'

const ToyDetails = () => {
    const { id } = useParams()
    const { toys, loading, error } = useFetchData()
    const toy = toys.find(t => t.toyId == id)

    const handeSubmit = (e) => {

        e.preventDefault()

        Swal.fire({
            title: "Succes!",
            text: "You've applied to try this toy.",
            icon: "success"
        });
    }

    return (
        <div className='py-10 w-11/12 mx-auto'>
            <div className='flex flex-col md:flex-row gap-5'>
                <img className='w-52 h-52' src={toy?.pictureURL} alt="" />
                <div>
                    <h1 className='text-3xl font-bold'>{toy?.toyName}</h1>
                    <p className='text-gray-600'>{toy?.sellerName}</p>

                    {toy?.rating > 4.8 ? <div className='flex items-center text-orange-500'><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /><span className='text-gray-600'>({toy?.rating})</span></div> : <div className='flex items-center text-orange-500'><FaStar /><FaStar /><FaStar /><FaStar /><FaStarHalf /><span className='text-gray-600'>({toy?.rating})</span></div>}

                    <div className='mt-5 flex gap-3'>
                        <p className='bg-gray-300 text-gray-600 py-1 px-2 rounded-2xl'>{toy?.subCategory}</p>
                        <p className='bg-primary text-orange-900 py-1 px-2 rounded-2xl'>Available- {toy?.availableQuantity}</p>
                    </div>
                    <p className='font-extrabold text-2xl mt-2'>{toy?.price} $</p>
                    <button className='btn btn-accent text-white'>Add to Cart <BiCartAdd size={20} /></button>

                </div>
            </div>
            <hr className='mt-5 text-gray-600' />

            <div className='mt-10'>
                <h1 className='text-2xl font-bold'>Description</h1>
                <p>{toy?.description}</p>
            </div>
            <hr className='mt-5 text-gray-600' />


            <div className='mt-10 flex flex-col justify-center items-center w-full'>
                <h1 className='mb-5 text-2xl font-bold text-center'>Have a Look</h1>
                <form onSubmit={handeSubmit} className='flex flex-col'>
                    <label className="input">
                        <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <g
                                strokeLinejoin="round"
                                strokeLinecap="round"
                                strokeWidth="2.5"
                                fill="none"
                                stroke="currentColor"
                            >
                                <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                                <circle cx="12" cy="7" r="4"></circle>
                            </g>
                        </svg>
                        <input
                            type="text"
                            required
                            placeholder="Name"
                            pattern="[A-Za-z][A-Za-z0-9\-]*"
                            minlength="3"
                            maxlength="30"
                            title="Only letters, numbers or dash"
                        />
                    </label><br />

                    <label className="input">
                        <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <g
                                strokeLinejoin="round"
                                strokeLinecap="round"
                                strokeWidth="2.5"
                                fill="none"
                                stroke="currentColor"
                            >
                                <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                            </g>
                        </svg>
                        <input type="email" placeholder="mail@site.com" required />
                    </label>

                    <button className='btn btn-accent text-white mt-5'>Try Now</button>

                </form>
            </div>
        </div>
    )
}

export default ToyDetails