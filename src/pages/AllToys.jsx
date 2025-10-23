import React, { useEffect, useState } from 'react'

import Loader from '../components/Loader'
import Card from '../components/Card'
import useFetchData from '../hooks/useFetchData'
import ToyNotFound from './ToyNotFound'
import PageError from './PageError'




const AllToys = () => {

    const { toys, loading, error } = useFetchData()
    const [search, setSearch] = useState('')
    const [searchedToys, setSearchedToys] = useState([])
    const [searchLoading, setSearchLoading] = useState(false)

    useEffect(()=>{
        setSearchLoading(true)
        const timer = setTimeout(()=>{
            const term = search.trim().toLowerCase()
            setSearchedToys(term? toys.filter(toy=> toy.toyName.toLowerCase().includes(term)): toys)
            setSearchLoading(false)
        }, 300)
        return ()=> clearTimeout(timer)
    },[search, toys])

    if(loading) return <Loader></Loader>;
    if(error) return <PageError></PageError>

    return (
        <div className='mb-10 w-11/12 mx-auto'>

            <title>Toys | FunVille Toys</title>

            <h1 className='text-center text-3xl md:text-5xl mt-10 font-bold'>Explore Every Fun Creation at Funville!</h1>
            <p className='text-center mt-3 w-11/12 md:w-7/12 mx-auto'>your one-stop destination to explore our entire collection! From building blocks and action figures to creative crafts and learning sets, discover a world full of imagination and joy.</p>
            <div className='mt-10 flex flex-col-reverse md:flex-row justify-between items-center'>
                <p className='text-[#001931] font-semibold text-xl mt-3 md:mt-0'>({searchedToys.length}) Toys Available</p>
                <input value={search} onChange={e => setSearch(e.target.value)} type="search" placeholder="Search Apps" className="input input-md" />
            </div>
            {searchLoading ? <Loader></Loader> : searchedToys.length === 0 ? <ToyNotFound></ToyNotFound> : <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-11/12 mx-auto gap-5 mt-10'>
                {searchedToys.map(toy => <Card key={toy.toyId} toy={toy}></Card>)}
            </div>}
        </div>
    )
}

export default AllToys