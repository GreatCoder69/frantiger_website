import React, { useEffect, useState } from "react";
import { Breadcrumb } from "react-bootstrap";
import { Link, useLocation, useParams } from "react-router-dom";
import BreadcrumbsForListings from "./BreadcrumbsForListings";
import BreadcrumbsForOtherPages from "./BreadcrumbsForOtherPages";
import "./breadcrumbs.scss";


const Breadcrumbs = () => {
  let [isArchive, setisArchive] = useState(true);

  let { pathname } = useLocation();
  let pathnames = pathname.split("/").filter((x) => x);

  useEffect(() => {
    if (
      pathnames == "technology" ||
      pathnames == "education" ||
      pathnames == "food" ||
      pathnames == "logistics" ||
      pathnames == "retail" ||
      pathnames == "services" ||
      pathnames == "health"
    ) {
      setisArchive(true);
    }
    else{
      setisArchive(false)
    }
  }, [isArchive, pathname]);

  return (
    <>
      {pathnames.length > 0 ?
        (isArchive ? 
          <BreadcrumbsForListings pathnames={pathnames} />
          : 
          <BreadcrumbsForOtherPages pathnames={pathnames} />)
        :""
      }
    </>
  );
};

export default Breadcrumbs;
