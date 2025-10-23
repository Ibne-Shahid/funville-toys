import axios from "axios"
import { useEffect, useState } from "react"



const useFetchData = () => {
    const [toys, setToys] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(()=>{
        setLoading(true)
        axios('../toys.json')
        .then(data=>{setToys(data.data);
            setLoading(false)
        })
        .catch((err) => {
        setError(err);
        setLoading(false);
      })
    },[])

    return {toys, loading, error}

}

export default useFetchData