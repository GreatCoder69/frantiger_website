import React from "react";
import bgTiger from "../../../../Assets/images/Blog/bgTiger.png";
import calendar from "../../../../Assets/images/Blog/calendar.png";
import authorCard from "../../../../Assets/images/Blog/authorCard.png";

const BlogPageHero = () => {
  return (
    <>
      <section className="blogPageHero-BgDiv text-center ">
        <img src={bgTiger} alt="" className="bgTiger" />
        <p className="text-start category">Category</p>
        <h1>Bank Home Loan EMI vs Monthly Rent:</h1>
        <h1>Which is better?</h1>
        <h1>These numbers may surprise you</h1>

        <div className="details absolute-center gap-5 r pt-3 pb-5">
          <div className="authorDetails d-flex gap-2">
            <img src={authorCard} alt="" className="" />
            <p>Lorem Ipsum</p>
          </div>
          <div className="d-flex gap-2">
            <p>_:_ Minutes Read</p>
          </div>
          <div className="date d-flex gap-2">
            <img src={calendar} alt="" className="calendarIcon" />
            <p>01 Jan 2023</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogPageHero;
