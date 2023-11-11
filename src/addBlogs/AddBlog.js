import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './addBlogs.css'
import { useEffect } from 'react'

const AddBlog = () => {

    const time = new Date().toLocaleString('en-US', { day: 'numeric', month: 'numeric', year: 'numeric', hour12: true })

    const [author, setAuthor] = useState("")
    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")
    const [id, setId] = useState(0)
    const [items, setItems] = useState([])
    let navigataion = useNavigate()

    useEffect(() => {
        if (localStorage.getItem('items')) {
            const storedItems = JSON.parse(localStorage.getItem('items'))
            setItems(storedItems)
            setId(storedItems[storedItems.length - 1].id + 1)
        } else setId(1)
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault()
        const item = { id: id, title: title, author: author, content: content, data: time }

        if (localStorage.getItem('items')) {
            const itemsCopy = JSON.parse(localStorage.getItem('items'));
            localStorage.setItem('items', JSON.stringify([...itemsCopy, item]))
        } else localStorage.setItem('items', JSON.stringify([item]))
        setTitle('')
        setAuthor('')
        setContent('')
        navigataion('/')
    }
    return (
        <div className='add-blog'>

            <div className='container form-content'>
                <h1>Add a New Blog</h1>
                <form onSubmit={handleSubmit}>
                    <div className='blog-title'>
                        <label>Blog title:</label> <br />
                        <input
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            type='text'
                            placeholder='Enter blog title'
                            required />
                    </div>
                    <div className='blog-auther'>
                        <label>Blog auther:</label> <br />
                        <input
                            value={author}
                            onChange={(e) => setAuthor(e.target.value)}
                            type='text'
                            placeholder='Enter blog content'
                            required />
                    </div>
                    <div className='blog-content'>
                        <label>Blog content:</label> <br />
                        <textarea
                            value={content}
                            onChange={(e) => setContent(e.target.value)}
                            type='text'
                            placeholder='Enter blog auther'
                            required />
                    </div>
                    <div className='submit'>
                        <button className='addBtn'>Add Blog</button >
                        {/* {!isAdding && <button className='addBtn'>Add Blog</button >}
                        {isAdding && <button disabled className='addBtn'>Add Blog...</button >} */}
                    </div>
                </form>
            </div >
        </div >
    )
}

export default AddBlog