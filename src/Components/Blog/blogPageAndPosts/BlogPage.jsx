import React from 'react'
import BlogPageHero from './BlogPages/BlogPagesHero'
import BlogPageContent from './BlogPages/BlogPagesContent'
import "./blog.scss"

const BlogPage = () => {
  return (
    <div className='bg-black'>
      <BlogPageHero/>
      <BlogPageContent/>
    </div>
  )
}

export default BlogPage;