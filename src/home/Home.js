import React, { useState } from 'react'
import './home.css';
import Blogs from '../blogs/Blogs'
import { useEffect } from 'react';
const Home = () => {
    const [data, setData] = useState()
    useEffect(() => {
        if (localStorage.getItem('items')) {
            setData(JSON.parse(localStorage.getItem('items')))
        }
    }, [])
    useEffect(() => {

    }, [])
    const handleDelete = (id) => {
        let newData = data.filter((data) => data.id !== id)
        setData(newData)
        localStorage.setItem('items', JSON.stringify(newData))

    }

    return (
        <div className='home'>
            {data && <Blogs
                blogs={data}
                handleDelete={handleDelete}
            />}
        </div>
    )
}

export default Home