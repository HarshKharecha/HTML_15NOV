import React from 'react'

function BlogList() {
    const posts = [
        { id: 'post-1', title: 'Understanding React State', author: 'Dan Abramov', date: 'Jan 15, 2026' },
        { id: 'post-2', title: 'A Guide to Flexbox Layouts', author: 'Rachel Andrew', date: 'Feb 3, 2026' },
        { id: 'post-3', title: 'Getting Started with Next.js', author: 'Lee Robinson', date: 'Mar 22, 2026' }
    ];

    return (
        <div>
            <h2>Latest Blog Posts:</h2>
            {posts.map(post => (
                <article key={post.id} style={{ backgroundColor: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '16px', padding: '20px', width: '400px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                    <h3>{post.title}</h3>
                    <p><small>By {post.author} on {post.date}</small></p>
                </article>
            ))}
        </div>
    )
}

export default BlogList