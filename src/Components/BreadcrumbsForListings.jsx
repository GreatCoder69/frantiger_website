import React from "react";
import search from "../Assets/images/search.png";
import { Link } from "react-router-dom";

const BreadcrumbsForListings = ({pathnames}) => {
    let breadcrumbsPath = ""
  return (
    <section className="scroll-snap innerPage-HeaderArchive d-flex justify-content-between align-items-center">
      <div className="innerPage-BreadCrumbsArchive">
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

      <div className="innerPage-SearchBar-DivArchive position-relative d-flex align-items-center">
        <button className="px-3 position-absolute">
          <img src={search} alt="" className="" />
        </button>

        <input
          type="text"
          placeholder="Search your business industry, Brand or Interest here"
          className="innerPage-inputplaceholder text-black"
        />
      </div>
    </section>
  );
};

export default BreadcrumbsForListings;
