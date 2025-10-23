import React from 'react'
import { IoTrashBinSharp } from 'react-icons/io5'
import { Link } from 'react-router'

const PageError = () => {
    return (
        <div>
            <div className='py-20 px-2'>
                <IoTrashBinSharp className='mx-auto h-52 w-52 text-red-700' />
                <p className='text-5xl text-red-700 text-center font-bold'>Something went wrong!</p>
                <p className='text-center text-[#627382] mt-3'>The page you are looking for doesn't exist or has been removed!</p>
                <div className='flex justify-center gap-5'>
                    <Link to='/'><button className="btn bg-gradient-to-r from-blue-600 to-blue-300 text-white mt-10 px-10 py-6">Back to home</button></Link>
                    <Link to='/allToys'><button className="btn bg-gradient-to-r from-orange-300 to-orange-600 text-white mt-10 px-10 py-6">Show All Toys</button></Link>
                </div>
            </div>
        </div>
    )
}

export default PageError