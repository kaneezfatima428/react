import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const [posts, setPosts] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const newPost = { title, description };

    setPosts([newPost, ...posts]); 

    setTitle('');
    setDescription('');
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4"> Post App</h2>

      <div className="card p-4 shadow-sm mb-4">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Title</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter post title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Description</label>
            <textarea
              className="form-control"
              rows="3"
              placeholder="Enter post description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            ></textarea>
          </div>

          <button type="submit" className="btn btn-primary w-100">
            Post 
          </button>
        </form>
      </div>

     
      <h4 className="mb-3">All Posts</h4>
      
      {posts.length === 0 ? (
        <p className="text-muted">No posts yet. Create your first post!</p>
      ) : (
        posts.map((item, index) => (
          <div key={index} className="card shadow-sm border-primary mb-3">
            <div className="card-body">
              <h4 className="card-title text-primary">{item.title}</h4>
              <p className="card-text">{item.description}</p>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default App;