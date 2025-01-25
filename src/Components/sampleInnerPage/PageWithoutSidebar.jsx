import React from 'react'
import PageBgDivWithoutSideBar from './PageWithoutSidebar/PageBgDivWithoutSideBar'
import PageContentWithoutSideBar from './PageWithoutSidebar/PageContentWithoutSideBar'
import "./pages.scss"

const PageWithoutSidebar = () => {
  return (
    <div className='bg-black'>
      <PageBgDivWithoutSideBar/>
      <PageContentWithoutSideBar/>
    </div>
  )
}

export default PageWithoutSidebar