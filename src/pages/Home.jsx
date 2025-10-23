import React, { use } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import Hero from '../components/Hero';
import Slide from '../components/Slide';
import Slide2 from '../components/Slide2';
import Slide3 from '../components/Slide3';
import Card from '../components/Card';
import Loader from '../components/Loader';
import PTW from '../components/PTW';
import { Link } from 'react-router';
import useFetchData from '../hooks/useFetchData';
import { Helmet } from 'react-helmet';
import PageError from './PageError';



const Home = () => {

    const { toys, loading, error } = useFetchData()


    const toysData = toys

    const slideOne = toysData[0]
    const slideTwo = toysData[1]
    const slideThree = toysData[2]

    const topRatedToys = toysData.filter(toys => toys?.rating > 4.5)

    const popularToys = topRatedToys.slice(0, 6)

    const mostSellingToys = toysData.filter(toy => toy?.availableQuantity < 60)

    if(loading) return <Loader></Loader>;
    if(error) return <PageError></PageError>

    return (
        <div className='mb-10'>

            <title>Home | FunVille Toys</title>

            <Hero></Hero>
            {loading ? <Loader></Loader> : <div className='my-20'>
                <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                    <SwiperSlide>
                        <Slide slideOne={slideOne}></Slide>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Slide2 slideTwo={slideTwo}></Slide2>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Slide3 slideThree={slideThree}></Slide3>
                    </SwiperSlide>
                </Swiper>
            </div>}
            {!loading && (
                <><h1 className='text-center text-3xl md:text-5xl mt-10 font-bold'>Popular Toys</h1>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-11/12 mx-auto gap-5 mt-10'>
                        {popularToys?.map(toy => <Card key={toy.toyId} toy={toy}></Card>)}
                    </div>
                    <div className='text-center mt-5'><Link to="/allToys"><button className='btn btn-accent text-white px-20'>See All</button></Link></div>
                    </>
                    
            )}

            <PTW></PTW>



            <h1 className='text-center text-3xl md:text-5xl mt-10 font-bold'>This Week's Top Selling</h1>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-flow-col gap-5 w-11/12 mx-auto mt-10'>
                {mostSellingToys?.map(toy => <Card key={toy.toyId} toy={toy}></Card>)}
            </div>



        </div>
    )
}

export default Home