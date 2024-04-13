import { useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetails = () => {
  const { id } = useParams();
  const { data: blog, error, isPending } = useFetch('http://localhost:8000/blogs/' + id);
  const history = useHistory();
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState("");
  const [editedAuthor, setEditedAuthor] = useState("");
  const [editedBody, setEditedBody] = useState("");

  const handleDelete = () => {
    fetch('http://localhost:8000/blogs/' + blog.id, {
      method: 'DELETE'
    }).then(() => {
      history.push('/');
    });
  }

  const handleEdit = () => {
    setIsEditing(true);
    setEditedTitle(blog.title);
    setEditedAuthor(blog.author);
    setEditedBody(blog.body);
  }

  const handleSave = () => {
    const updatedBlog = { 
      title: editedTitle, 
      author: editedAuthor, 
      body: editedBody 
    };
    fetch('http://localhost:8000/blogs/' + blog.id, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updatedBlog)
    }).then(() => {
      history.push('/');
    });
  }

  if (isPending) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!blog) {
    return <div>Blog not found</div>;
  }

  return (
    <div className="blog-details" style={styles.container}>
      <article>
        <h2>{blog.title}</h2>
        <p>Payment Mode is: {blog.author}</p>
        <div>{blog.body}</div>
        <button className="edit-btn" onClick={handleEdit}>Edit</button><br /><br />
        <button className="delete-btn" onClick={handleDelete}>Delete</button>
      </article>
      {isEditing && (
        <form style={styles.form}>
          <h3 style={styles.sideHeading}>Edit Title:</h3>
          <input 
            type="text" 
            value={editedTitle} 
            onChange={(e) => setEditedTitle(e.target.value)} 
            style={styles.input} 
            placeholder="Enter title" 
          />
          <h3 style={styles.sideHeading}>Edit Author:</h3>
          <input 
            type="text" 
            value={editedAuthor} 
            onChange={(e) => setEditedAuthor(e.target.value)} 
            style={styles.input} 
            placeholder="Enter author" 
          />
          <h3 style={styles.sideHeading}>Edit Body:</h3>
          <textarea 
            value={editedBody} 
            onChange={(e) => setEditedBody(e.target.value)} 
            style={styles.textarea} 
            placeholder="Enter body" 
          ></textarea>
          <button className="save-btn" onClick={handleSave} disabled={!editedTitle || !editedAuthor || !editedBody}>Save</button>
        </form>
      )}
    </div>
  );
}

const styles = {
  container: {
    maxWidth: '800px',
    margin: '0 auto',
    padding: '20px',
  },
  article: {
    marginBottom: '20px',
  },
  form: {
    marginTop: '20px',
  },
  sideHeading: {
    marginBottom: '5px',
    color: '#007bff',
  },
  input: {
    width: '100%',
    padding: '10px',
    marginBottom: '10px',
  },
  textarea: {
    width: '100%',
    padding: '10px',
    marginBottom: '10px',
  },
  button: {
    padding: '10px 20px',
    marginRight: '10px',
    cursor: 'pointer',
    border: 'none',
    borderRadius: '5px',
    outline: 'none',
  },
  saveButton: {
    padding: '10px 20px',
    background: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};

export default BlogDetails;