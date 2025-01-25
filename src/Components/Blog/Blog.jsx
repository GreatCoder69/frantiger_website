import React from "react";
import Flickity from "react-flickity-component";
import blogBG from "../../Assets/images/Blog/blogBG.png";
import authorCard from "../../Assets/images/Blog/authorCard.png";
import { data } from "./blogData.js";
import "./blog.scss";

const Blog = () => {
  const images = [
    "https://images.pexels.com/photos/169647/pexels-photo-169647.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/313782/pexels-photo-313782.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/773471/pexels-photo-773471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/672532/pexels-photo-672532.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/632522/pexels-photo-632522.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/777059/pexels-photo-777059.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  ];

  return (
    <>
      <div className="bg-black">
        <section className="blogHero ">
          <div className="blogHeroContent bg-black opacity-75 position-relative">
            <p className="categoryPara">Category</p>

            <h1>Bank Home Loan EMI vs Monthly Rent:</h1>
            <h1>Which is better?</h1>
            <h1>These numbers may surprise you</h1>

            <div className="authorCard d-flex gap-2">
              <div>
                <img
                  src={authorCard}
                  alt=""
                  className="bg-white rounded-circle"
                />
              </div>
              <p>Lorem Ipsum</p>
            </div>

            <p className="description">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Blanditiis quam repudiandae provident est itaque voluptatem iure
              suscipit dicta, tis dolor sit amet consectetur adipisicing elit.
              Quisquam at velit minima quas? .
            </p>
            <p className="footerPara">READ FULL ARTICLE</p>
            <p className="footerPara">SHARE</p>
          </div>

          <div className="blogCarousel position-absolute bg-white">
            <div className="carousel-WholeConatiner ">
              <Flickity
                elementType="div"
                options={{
                  pageDots: false,
                  draggable: false,
                  freeScroll: true,
                  groupCells: 2,
                  wrapAround:true,
                }}
                reloadOnUpdate
              >
                {data.map(
                  ({
                    id,
                    image,
                    authorName,
                    authorContent1,
                    authorContent2,
                    authorContent3,
                  }) => {
                    return (
                      <>
                        <div
                          className="d-flex flex-column pe-5 carousel-InnerContainer"
                          key={id}
                        >
                          <div className="imgCarousel-Container">
                            <img src={blogBG} alt="" />
                          </div>
                          <div className="carousel-Inner-ContentConatiner bg-white pb-5 py-2 px-2 pt-4 text-center d-flex flex-column position-absolute text-black gap-3">
                            <div className="authorDiv d-flex justify-content-center gap-2">
                              <img src={authorCard} alt="" className="" />
                              <h6 className="fw-lighter">{authorName}</h6>
                            </div>
                            <div className="authourContentDiv">
                              <h6 className="text-center">{authorContent1}</h6>
                              <h6 className="text-center">{authorContent2}</h6>
                              <h6 className="text-center">{authorContent3}</h6>
                            </div>
                            <p>READ ARTICLE</p>
                          </div>
                        </div>
                      </>
                    );
                  }
                )}
              </Flickity>
              {/* <div
                className=" bg-black position-absolute image-blackShadeDiv"
              ></div> */}
            </div>
            {/* <div className="carouselDiv"></div> */}
          </div>
        </section>
        <h1 className="featuredArticles-Heading">Featured Articles</h1>
      </div>

      {/* <div className="dummmy-div"></div> */}

      {/* <div className="d-flex carousel-conatiner">
        {data.map(
          ({ id, image, authorName, authorContent, readArticleBtn }) => {
            return (
              // <div className="carousel-Innerconatiner position-relative">
              //   <div className="imgCarousel-Container">
              //     <img src={blogBG} alt="" width={400} height={500} />
              //   </div>
              //   <div className="d-flex carousel-Innerconatiner position-absolute">
              //     <div className="authorDiv d-flex">
              //       <img src={authorCard} alt="" />
              //       <h6>{authorName}</h6>
              //     </div>
              //     <h1>{authorContent}</h1>
              //     <p>{readArticleBtn}</p>
              //   </div>
              // </div>
              <h1>hg</h1>
            );
          }
        )}
      </div> */}
    </>
  );
};

export default Blog;
