import React from 'react'
import { FaStar } from 'react-icons/fa';

const Card = ({toy}) => {
    return (
        <div>
            <div className='bg-gray-200 py-3 px-5 rounded-lg hover:scale-105 transition ease-in-out flex flex-col justify-between h-full'>
                <img className='mx-auto' src={toy?.pictureURL} alt="" />
                <p className='text-center font-semibold mt-3'>{toy?.toyName}</p>
                <div className='mt-5 bg-gray-400 rounded-2xl'>
                    <p className='flex justify-center items-center gap-2'>Rating:- {toy?.rating} <FaStar /></p>
                </div>
                <div className='text-center mt-3'>
                    <p>Available:- {toy?.availableQuantity}</p>
                    <p>Price:- {toy?.price} $</p>
                    <button className='btn btn-secondary text-center w-full mt-3'>View More</button>
                </div>

            </div>
        </div>
    )
}

export default Card