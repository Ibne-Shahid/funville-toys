import React, { useEffect, useState } from 'react';

import Loader from '../components/Loader';
import Card from '../components/Card';
import useFetchData from '../hooks/useFetchData';
import ToyNotFound from './ToyNotFound';
import PageError from './PageError';

const AllToys = () => {
    const { toys, loading, error } = useFetchData();
    const [search, setSearch] = useState('');
    const [searchedToys, setSearchedToys] = useState([]);
    const [searchLoading, setSearchLoading] = useState(false);

    const [sortType, setSortType] = useState('');

    useEffect(() => {
        setSearchLoading(true);

        const timer = setTimeout(() => {
            const term = search.trim().toLowerCase();
            let filtered = term
                ? toys.filter(toy =>
                    toy.toyName.toLowerCase().includes(term)
                )
                : toys;

            if (sortType === "price-asc") {
                filtered = [...filtered].sort((a, b) => a.price - b.price);
            }
            if (sortType === "price-desc") {
                filtered = [...filtered].sort((a, b) => b.price - a.price);
            }
            if (sortType === "qty-asc") {
                filtered = [...filtered].sort((a, b) => a.availableQuantity - b.availableQuantity);
            }
            if (sortType === "qty-desc") {
                filtered = [...filtered].sort((a, b) => b.availableQuantity - a.availableQuantity);
            }

            setSearchedToys(filtered);
            setSearchLoading(false);
        }, 300);

        return () => clearTimeout(timer);
    }, [search, toys, sortType]);

    if (loading) return <Loader />;
    if (error) return <PageError />;

    return (
        <div className='mb-10 w-11/12 mx-auto'>
            <title>Toys | FunVille Toys</title>

            <h1 className='text-center text-3xl md:text-5xl mt-10 font-bold'>
                Explore Every Fun Creation at Funville!
            </h1>
            <p className='text-center mt-3 w-11/12 md:w-7/12 mx-auto'>
                your one-stop destination to explore our entire collection! From building blocks and action figures to creative crafts and learning sets, discover a world full of imagination and joy.
            </p>

            <div className='mt-10 flex flex-col md:flex-row justify-between items-center gap-4'>

                <p className='text-[#001931] font-semibold text-xl'>
                    ({searchedToys.length}) Toys Available
                </p>

                <div className="flex flex-col md:flex-row gap-3 items-center">

                    <select
                        className="select select-md"
                        value={sortType}
                        onChange={e => setSortType(e.target.value)}
                    >
                        <option value="">Sort By</option>
                        <option value="price-asc">Price: Low → High</option>
                        <option value="price-desc">Price: High → Low</option>
                        <option value="qty-asc">Quantity: Low → High</option>
                        <option value="qty-desc">Quantity: High → Low</option>
                    </select>

                    <input
                        value={search}
                        onChange={e => setSearch(e.target.value)}
                        type="search"
                        placeholder="Search Toys"
                        className="input input-md"
                    />
                </div>
            </div>

            {searchLoading ? (
                <Loader />
            ) : searchedToys.length === 0 ? (
                <ToyNotFound />
            ) : (
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-11/12 mx-auto gap-5 mt-10'>
                    {searchedToys.map(toy => (
                        <Card key={toy.toyId} toy={toy}></Card>
                    ))}
                </div>
            )}
        </div>
    );
};

export default AllToys;
