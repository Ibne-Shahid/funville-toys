import React from 'react'
import { useParams } from 'react-router'
import Swal from 'sweetalert2'
import useFetchData from '../hooks/useFetchData'
import Loader from '../components/Loader'
import ToyDetailsComponent from '../components/ToyDetailsComponent'
import ToyNotFound from './ToyNotFound'
import PageError from './PageError'

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

        e.target.reset()
    }

    if(loading) return <Loader></Loader>;
    if(error) return <PageError></PageError>

    return (
        <div className='py-10 w-11/12 mx-auto'>
            <title>Toy Details | FunVille Toys</title>

            {loading? <Loader></Loader> : error || !toy ? <ToyNotFound></ToyNotFound> : <ToyDetailsComponent toy={toy} handeSubmit={handeSubmit}></ToyDetailsComponent>}
            
            
            
            
        </div>
    )
}

export default ToyDetails