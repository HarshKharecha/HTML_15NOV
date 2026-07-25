import React from 'react';
import { useParams } from 'react-router-dom';

function BlogDetails() {
  const { id } = useParams();
  return (
    <div>
      <h2>Blog Title: Understanding React Router (ID: {id})</h2>
      <p>Blog Description: This is a detailed description of the blog post regarding dynamic routing.</p>
    </div>
  );
}

export default BlogDetails;