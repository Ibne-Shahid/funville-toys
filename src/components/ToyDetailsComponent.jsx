import React from 'react'
import { FaStar, FaStarHalf } from 'react-icons/fa'
import { BiCartAdd } from 'react-icons/bi'
import TryNow from '../components/TryNow'

const ToyDetailsComponent = ({ toy, handeSubmit }) => {
    return (
        <div>
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

            <TryNow handeSubmit={handeSubmit}></TryNow>
        </div>
    )
}

export default ToyDetailsComponent