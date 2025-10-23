import React from 'react'
import heroIcon from '../assets/FUNVILLE-logo.png'
import { Link } from 'react-router'


const Hero = () => {
  return (
    <div className='bg-base-200 flex md:flex-col lg:flex-row justify-center items-center py-5 px-5 md:px-10 md:py-10 lg:px-0 lg:py-0'>
        <div className='lg:w-3/7 hidden md:block'><img src={heroIcon} alt="" /></div>
        <div className='lg:w-4/7 text-center lg:text-start'>
            <h1 className='font-extrabold text-2xl md:text-4xl'>WELCOME</h1>
            <p className='text-2xl md:text-6xl font-bold'>To <br className='block lg:hidden'/> <span className='text-secondary text-4xl md:text-6xl'>FunVille <span className='text-primary'>Toys</span></span></p>
            <p className='lg:w-2/3 mt-5'>
                we bring smiles to every child’s face! Explore a colorful world of creativity, imagination, and endless playtime joy. From classic building sets and action figures to puzzles, dolls, and educational toys — we have something special for every kid (and the kid inside you!).
            </p>
            <Link to="/allToys"><button className='btn btn-accent mt-5 text-white'>Shop Now</button></Link>
        </div>
    </div>
  )
}

export default Hero