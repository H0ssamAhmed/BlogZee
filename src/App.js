import { Route, Routes } from 'react-router-dom';
import AddBlog from './addBlogs/AddBlog';
import Home from './home/Home';
import Navbar from './navbar/Navbar'
import BlogDetails from './Components/BlogDetails';
import Error from './Components/Error';


function App() {
  return (
    <div className="App">
      <Navbar />
      <div className='home-content'>
        <Routes>
          <Route excat path="/" element={<Home />} />
          <Route path="/add-new-blog" element={<AddBlog />} />
          <Route path="/blog/:userId" element={<BlogDetails />} />
          <Route path="/*" element={<Error />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
