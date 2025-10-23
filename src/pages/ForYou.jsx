import React from 'react'
import useFetchData from '../hooks/useFetchData'
import Loader from '../components/Loader'
import Card from '../components/Card'
import Swal from 'sweetalert2'
import PageError from './PageError'

const ForYou = () => {
    const { toys, loading, error } = useFetchData()

    const recomendedToys = toys.slice(5, 9)

    const handleSubmit = (e) => {

        e.preventDefault()

        Swal.fire({
            title: "Succes!",
            text: "Your comment has been submited.",
            icon: "success"
        });

        e.target.reset()
    }

    if(loading) return <Loader></Loader>;
    if(error) return <PageError></PageError>

    return (
        <div className='py-10'>
            <title>For You | FunVille Toys</title>
            <h1 className='text-center text-3xl md:text-5xl font-bold'>Recommended For You</h1>
            {loading ? <Loader></Loader> : <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-11/12 mx-auto gap-5 mt-10'>
                {recomendedToys.map(toy => <Card key={toy.toyId} toy={toy}></Card>)}
            </div>}
            <hr className='mt-10 w-11/12 mx-auto text-gray-600' />
            <h1 className='text-center text-3xl md:text-5xl font-bold my-10'>Leave A Review</h1>
            <form onSubmit={handleSubmit} className='flex flex-col items-center'>
                <textarea className="textarea" placeholder="Review"></textarea>
                <button className='btn btn-accent text-white mt-3'>Submit</button>
            </form>
        </div>
    )
}

export default ForYou