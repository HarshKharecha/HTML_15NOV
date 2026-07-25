import React from 'react';
import { useParams } from 'react-router-dom';

function UserPost() {
  const { userId, postId } = useParams();

  return (
    <div>
      <h2>User Post Details</h2>
      <p>User ID: {userId}</p>
      <p>Post ID: {postId}</p>
      <p>Combined Information: Showing Post {postId} written by User {userId}.</p>
    </div>
  );
}

export default UserPost;