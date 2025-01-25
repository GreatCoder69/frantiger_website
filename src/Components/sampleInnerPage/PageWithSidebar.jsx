import React from 'react'

import PageContentWithSideBar from './PageWithSidebar/PageContentWithSideBar'
import PageBgDivWithSideBar from './PageWithSidebar/PageBgDivWithSideBar'
import "./pages.scss";

const PageWithSidebar = () => {
  return (
    <div className='pageWithSidebarContainer'>
        <PageBgDivWithSideBar/>
        <PageContentWithSideBar/>
    </div>                                                                                                                                            
  )
}

export default PageWithSidebar