import React from 'react'
import { BsFillPatchQuestionFill } from 'react-icons/bs'
import { FaHandsHelping } from 'react-icons/fa'
import { FcAbout } from 'react-icons/fc'
import { GiDiceTarget } from 'react-icons/gi'

const AboutUs = () => {
    return (
        <div className='py-8 md:py-10 w-11/12 mx-auto space-y-5 lg:space-y-10'>
            <title>About Funville | FunVille Toys</title>
            <div className='flex flex-col-reverse md:flex-row justify-between items-center gap-10 md:gap-5 lg:gap-0'>
                <div className='space-y-3 lg:w-1/2'>
                    <h1 className='text-xl md:text-3xl font-bold'>About FunVille Toys</h1>
                    <h3 className='font-semibold'>Welcome to FunVille Toys - where imagination meets endless fun!</h3>
                    <p>At FunVille, we believe playtime is more than just fun - it’s how kids learn, grow, and explore the world around them. That’s why we bring you a vibrant collection of toys that spark creativity, curiosity, and joy in every child’s heart.</p>
                    <p>From colorful building sets and exciting action figures to brain-boosting puzzles and adorable plushies, we handpick every toy to ensure safety, quality, and pure happiness.</p>
                </div>
                <div className='lg:w-1/2 flex justify-center'>
                    <FcAbout size={250} />
                </div>
            </div>

            <div className='flex flex-col md:flex-row justify-between items-center gap-10 md:gap-5 lg:gap-0'>
                <div className='lg:w-1/2 flex justify-center'>
                    <GiDiceTarget className='text-green-600' size={250} />
                </div>
                <div className='space-y-3 lg:w-1/2'>
                    <h1 className='text-xl md:text-3xl font-bold'>Our Mission</h1>
                    <p>To make every child’s world a little brighter by providing safe, affordable, and educational toys that inspire creativity and endless smiles.</p>
                </div>
            </div>

            <div className='flex flex-col-reverse md:flex-row justify-between items-center gap-10 md:gap-5 lg:gap-0'>
                <div className='space-y-3 lg:w-1/2'>
                    <h1 className='text-xl md:text-3xl font-bold'>Our Promise</h1>
                    <ul className='list-disc'>
                        <li>100% safe and child-friendly materials</li>
                        <li>Carefully curated collections for all ages</li>
                        <li>Fast delivery and friendly customer support</li>
                        <li>A passion for spreading joy through play</li>
                    </ul>
                </div>
                <div className='lg:w-1/2 flex justify-center'>
                    <FaHandsHelping className='text-yellow-600' size={250} />
                </div>
            </div>

            <div className='flex flex-col md:flex-row justify-between items-center gap-10 md:gap-5 lg:gap-0'>
                <div className='lg:w-1/2 flex justify-center'>
                    <BsFillPatchQuestionFill className='text-fuchsia-600' size={250}/>
                </div>
                <div className='space-y-3 lg:w-1/2'>
                    <h1 className='text-xl md:text-3xl font-bold'>Why Choose Us?</h1>
                    <p>Because we care - about your child’s happiness, imagination, and learning journey. Whether you’re buying the first building block for your toddler or a perfect gift for a loved one, FunVille is your trusted toy destination.</p>
                </div>
            </div>
            <hr className='text-gray-400'/>
            <p className='font-bold text-center md:text-lg lg:text-2xl text-gray-500'>“At FunVille Toys, every toy tells a story — and every story begins with a smile.”</p>
            <hr className='text-gray-400'/>
        </div>
    )
}

export default AboutUs