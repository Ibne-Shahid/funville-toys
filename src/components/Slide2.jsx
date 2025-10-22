import React from 'react'
import { FaStar } from 'react-icons/fa'

const Slide2 = ({slideTwo}) => {
    return (
        <div className='w-11/12 mx-auto'>
            <div className="hero bg-base-300 py-8 px-10 md:px-5 rounded-lg">
                <div className="hero-content flex-col lg:flex-row gap-10">
                    <img
                        src={slideTwo?.pictureURL}
                        className="w-[220px] rounded-lg"
                    />
                    <div className='p-5 md:p-0'>
                        <h1 className="text-3xl md:text-4xl font-bold">{slideTwo?.toyName}</h1>
                        <p className='mt-3 bg-gray-300 py-1 px-2 inline-block rounded-xl font-semibold'>{slideTwo?.sellerName}</p>
                        <p className="py-6">
                            {slideTwo?.description}
                        </p>
                        <div className='flex gap-3 text-xs md:text-base'>
                            <div className='bg-orange-300 py-1 px-2 inline-block rounded-xl font-semibold text-orange-600'>
                                <p className='flex items-center gap-1'>Rating: {slideTwo?.rating} <FaStar /></p>
                            </div>
                            <p className='bg-blue-300 py-1 px-2 inline-block rounded-xl font-semibold text-blue-600'>Price: {slideTwo?.price} $</p>
                        </div>
                        <button className="btn btn-accent text-white mt-3">See Details</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Slide2