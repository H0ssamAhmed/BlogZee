import React from 'react'
import '../blogs/Blogs.css'
export const BlogDetails = () => {
    const blog = JSON.parse(localStorage.getItem('items'))[0]


    return (
        <div className='Blog-details'>
            {blog &&
                <div>
                    <h2>{blog.title}</h2>
                    <p className='author'> written by {blog.author}</p>
                    <p className='time'>{blog.time}</p>
                    <p className='blog-content'>{blog.content}</p>
                </div>}
        </div>
    )
}
export default BlogDetails