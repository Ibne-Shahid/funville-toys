import React from 'react'

import Loader from '../components/Loader'
import Card from '../components/Card'
import useFetchData from '../hooks/useFetchData'

const AllToys = () => {

    const { toys, loading, error } = useFetchData()

    return (
        <div className='mb-10 w-11/12 mx-auto'>
            <h1 className='text-center text-3xl md:text-5xl mt-10 font-bold'>Explore Every Fun Creation at Funville!</h1>
            <p className='text-center mt-3 w-11/12 md:w-7/12 mx-auto'>your one-stop destination to explore our entire collection! From building blocks and action figures to creative crafts and learning sets, discover a world full of imagination and joy.</p>
            <div className='mt-10 flex flex-col-reverse md:flex-row justify-between items-center'>
                <p className='text-[#001931] font-semibold text-xl mt-3 md:mt-0'>({toys.length}) Apps Found</p>
                <input type="search" placeholder="Search Apps" className="input input-md" />
            </div>
            {loading? <Loader></Loader>: <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-11/12 mx-auto gap-5 mt-10'>
                        {toys.map(toy => <Card key={toy.toyId} toy={toy}></Card>)}
                    </div>}
        </div>
    )
}

export default AllToys