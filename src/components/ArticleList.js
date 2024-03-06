import React from 'react'
import Article from '../components/Article'
import blogData from '../data/blog'

function ArticleList() {
    // console.log(blogData)
    const postsArray = blogData.posts
    // console.log(postsArray)
    return (
        <main>
            {postsArray.map((post) => (
                <Article key={post.id} post={post} title={post.title} date={post.date} preview={post.preview}/>
            ))}
        </main>
    )
}

export default ArticleList