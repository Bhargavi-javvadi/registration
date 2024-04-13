import { useState } from 'react';
import { Link } from 'react-router-dom';

const BlogList = ({ blogs }) => {
  const [searchTitle, setSearchTitle] = useState('');

  const filteredBlogs = blogs.filter(blog => {
    return blog.title.toLowerCase().includes(searchTitle.toLowerCase());
  });

  const handleChange = (e) => {
    setSearchTitle(e.target.value);
  };

  return (
    <div className="blog-list">
      <div className="search-bar">
        <label htmlFor="search">Search:</label>
        <input 
          type="text" 
          id="search" 
          value={searchTitle} 
          onChange={handleChange} 
          style={{
            height: '40px', // Increase height
            width: '700px', // Increase width
            border: '5px pink', // Add color to border
            borderRadius: '5px ', // Add border radius
            padding: '5px', // Add padding
            backgroundColor:'azure',
          }}
        />
      </div>
      {filteredBlogs.map(blog => (
        <div className="blog-preview" key={blog.id}>
          <Link to={`/blogs/${blog.id}`}>
            <h2>{blog.title}</h2>
            <p>Payment Mode is: {blog.author}</p>
          </Link>
        </div>
      ))}
    </div>
  );
}
 
export default BlogList;
