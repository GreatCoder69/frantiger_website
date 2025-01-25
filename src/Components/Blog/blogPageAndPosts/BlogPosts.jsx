import React from 'react'

import BlogPostsContent from './BlogPosts/BlogPostsContent'
import BlogPageHero from './BlogPages/BlogPagesHero';
import "./blog.scss";

const BlogPosts = () => {
  return (
    <div className='pageWithSidebarContainer'>
        <BlogPageHero/>
        <BlogPostsContent/>
    </div>                                                                                                                                            
  )
}

export default BlogPosts;