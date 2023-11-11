import React, { useEffect } from 'react'
import './Blogs.css'
import { Link } from 'react-router-dom'

const Blogs = ({ blogs, handleDelete, }) => {
    useEffect(() => {
        if (blogs.length === 0) {
            localStorage.clear()
        }
    }, [blogs.length])

    return (
        <div className='blogs'>
            {blogs.map((blog) => {
                return (<div className='blog' key={blog.id}>
                    <h3 className='title'>{blog.title}</h3>
                    <div className='author'>
                        <p className='author-name'>{blog.author}</p>
                        <p className='date'>{blog.time}</p>
                    </div>
                    <div className='delete'>
                        <Link to={`/blog/${blog.id}`}>
                            <button>Veiw</button>
                        </Link>
                        <button onClick={() => handleDelete(blog.id)} className='deleteBtn'>Delete</button>
                    </div>
                </div>)
            })}
        </div >
    )
}


export default Blogs