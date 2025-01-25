import React from 'react'
import { Link } from 'react-router-dom';


const SubMenuItem = ({item}) => {
  return (
    <div>
         <li>
      <Link to={item.link3}>{item.text3}</Link>
    </li>
    </div>
  )
}

export default SubMenuItem