import React from 'react'

const PTW = () => {
    return (
        <div>
            <h1 className='text-center text-3xl md:text-5xl mt-10 font-bold'>Play To Win</h1>
            <div className='flex flex-col md:flex-row items-center mt-10 bg-gradient-to-r from-[#632ee3] to-[#9f62f2] px-14 py-10'>
                <div className='grid grid-cols-3 w-full md:w-1/2'>
                    <img src="https://img.icons8.com/?size=100&id=nkj0lT40HdhC&format=png&color=000000" alt="" />
                    <img src="https://img.icons8.com/?size=100&id=jJBhufA2uedC&format=png&color=000000" alt="" />
                    <img src="https://img.icons8.com/?size=100&id=GsXzqAYf8Ps4&format=png&color=000000" alt="" />
                    <img src="https://img.icons8.com/?size=100&id=HjVrjTShsE5e&format=png&color=000000" alt="" />
                    <img src="https://img.icons8.com/?size=100&id=p6iYcd56bUym&format=png&color=000000" alt="" />
                    <img src="https://img.icons8.com/?size=100&id=ELXU0hCjPvuG&format=png&color=000000" alt="" />
                    <img src="https://img.icons8.com/?size=100&id=65663&format=png&color=000000" alt="" />
                    <img src="https://img.icons8.com/?size=100&id=WvIQNqWmz6In&format=png&color=000000" alt="" />
                    <img src="https://img.icons8.com/?size=100&id=B5cppu5XnJnP&format=png&color=000000" alt="" />
                </div>
                <div className='w-full md:w-1/2 mt-5 md:mt-0'>
                    <h1 className='text-2xl md:text-4xl font-semibold'>Fun & Exciting (for kids and families)</h1>
                    <p className='mt-3'>Step into the FunVille Game Zone! Play exciting mini-games, challenge your friends, and collect points to win amazing prizes. The more you play, the more you win — fun never stops at FunVille!</p>
                    <button className='btn btn-secondary mt-3'>Play Now</button>
                </div>
            </div>
        </div>
    )
}

export default PTW