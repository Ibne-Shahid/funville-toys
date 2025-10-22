import React from 'react'

import { PiCrosshair } from 'react-icons/pi'
import { Link } from 'react-router'

const Error = () => {
  return (
    <div className='py-10 flex flex-col items-center bg-secondary min-h-screen'>

            <title>404 Error | FunVille Toys</title>
        
            <PiCrosshair className='w-56 h-56 text-red-600'/>
            <h1 className='text-3xl md:text-5xl text-red-600 text-center font-bold'>404</h1>
            <h3 className='text-xl md:text-3xl text-red-600 text-center font-bold'>Ooppss! PAGE NOT FOUND</h3>
            <p className='text-primary'>Sorry, the page you are looking for doesn't exist!</p>
            <Link to="/"><button className='btn btn-accent text-white mt-5'>Back to Home</button></Link>
    </div>
  )
}

export default Error