import axios from "axios";
import React, { useEffect, useState } from "react";
import BlogPage from "./blogPageAndPosts/BlogPage";
import BlogPosts from "./blogPageAndPosts/BlogPosts";

const BlogsCategory = () => {
  // let [data, setData] = useState();

  // let blogurl = "https://jsonplaceholder.typicode.com/posts/1";
  // let blogurl = "http://localhost:3000/products"

  // useEffect(() => {
  //   axios.get(blogurl).then((response) => {
  //     // setData(response.data);
  //     console.log(response.data);

  //     // console.log(data);
  //   });
  // }, []);

  return (
    <div>
     {/* <BlogPage/> */}
     <BlogPosts/>
    </div>
  );
};

export default BlogsCategory;
