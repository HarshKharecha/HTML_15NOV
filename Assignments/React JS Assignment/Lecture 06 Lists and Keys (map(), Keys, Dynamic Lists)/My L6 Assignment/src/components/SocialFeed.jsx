import React from 'react'

function SocialFeed() {
    const posts = [
        { id: 'feed-01', username: 'travel_bug', caption: 'Lost in Tokyo streets! 🗼', likes: 1420 },
        { id: 'feed-02', username: 'chef_master', caption: 'Perfect sourdough bread out of the oven.', likes: 890 },
        { id: 'feed-03', username: 'coder_life', caption: 'Clean code = Happy mind. 💻', likes: 2311 }
    ];

    return (
        <div style={{ maxWidth: '400px', margin: '0' }}>
            <h2>Social Feed:</h2>
            {posts.map(post => (
                <div key={post.id} style={{ border: '1px solid #ccc', marginBottom: '15px', padding: '15px', borderRadius: '8px' }}>
                    <h4>@{post.username}</h4>
                    <p>{post.caption}</p>
                    <p style={{ color: 'red' }}>❤️ {post.likes} Likes</p>
                </div>
            ))}
        </div>
    )
}

export default SocialFeed