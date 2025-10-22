import React from 'react'
import { FaStar } from 'react-icons/fa';
import { Link } from 'react-router';

const Card = ({toy}) => {
    return (
        <div>
            <div className='bg-gray-200 py-3 px-5 rounded-lg hover:scale-105 transition ease-in-out flex flex-col justify-between h-full'>
                <img className='mx-auto' src={toy?.pictureURL} alt="" />
                <p className='text-center font-semibold mt-3'>{toy?.toyName}</p>
                <div className='mt-5 bg-gray-400 rounded-2xl'>
                    <p className='flex justify-center items-center gap-2'>Rating:- {toy?.rating} <FaStar /></p>
                </div>
                <div className='mt-3 flex justify-between items-center'>
                    <p className='text-xs md:text-sm font-semibold bg-primary p-1 rounded-2xl text-orange-900'>Available:- {toy?.availableQuantity}</p>
                    <p className='text-xs md:text-sm font-semibold bg-accent p-1 rounded-2xl text-green-900'>Price:- {toy?.price} $</p>
                    
                </div>
                <div className='text-center'><Link to={`/toyDetails/${toy.toyId}`}><button className='btn btn-secondary text-center w-full mt-3'>View More</button></Link></div>

            </div>
        </div>
    )
}

export default Card