import React from 'react';
import { useNavigate } from 'react-router-dom';

function UserPostList() {
  const navigate = useNavigate();
  const userId = 42;
  const postId = 105;

  return (
    <div>
      <h2>Dashboard</h2>
      <button onClick={() => navigate(`/more/userpostlist/user/${userId}/post/${postId}`)}>
        View Post {postId} by User {userId}
      </button>
    </div>
  );
}

export default UserPostList;