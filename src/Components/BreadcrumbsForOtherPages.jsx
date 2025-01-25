import React from 'react'
import search from "../Assets/images/search.png";
import { Link } from 'react-router-dom';

const BreadcrumbsForOtherPages = ({pathnames,breadcrumbs}) => {
  let breadcrumbsPath = "";

  return (
    
    <section className="scroll-snap innerPage-Header d-flex justify-content-between align-items-center bg-black">
          <div className="innerPage-BreadCrumbs">
            <Link to="/" className="text-decoration-none homeCrumb">
              HOME
            </Link>
            {pathnames.map((name, index) => {
              breadcrumbsPath += `${name}`;
              const isLast = index === pathnames.length - 1;
              return isLast ? (
                <span className="text-uppercase " key={index}>
                  {name}
                </span>
              ) : (
                <span className="text-uppercase" key={index}>
                  <Link
                    to={breadcrumbsPath}
                    className="text-decoration-none lastBreadCrumbs"
                  >
                    {name}
                  </Link>
                </span>
              );
            })}
          </div>

          <div className="innerPage-SearchBar-Div position-relative d-flex align-items-center">
            <button className="px-3 position-absolute">
              <img src={search} alt="" className="" />
            </button>

            <input
              type="text"
              placeholder="Search your business industry, Brand or Interest here"
              className=" text-black"
            />
          </div>
        </section>
  )
}

export default BreadcrumbsForOtherPages