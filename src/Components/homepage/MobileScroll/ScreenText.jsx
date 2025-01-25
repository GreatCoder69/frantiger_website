import React, { useRef, useEffect, useState } from "react";
import "./MobileScroll.scss"

const ScreenText = ({ screen, setCurrentImg, i }) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const setItemVisible = (e) => {
    if (e[0]?.isIntersecting) {
      setIsVisible(!isVisible);
      setCurrentImg(i);
    }
  };

  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.6,
  };

  useEffect(() => {
    const observer = new IntersectionObserver(setItemVisible, options);
    let observerRefValue = null;
    if (ref.current) {
      observer.observe(ref.current);
      observerRefValue = ref.current;
    }

    return () => {
      if (observerRefValue) {
        observer.unobserve(observerRefValue);
      }
    };
  }, []);

  return (
    <section
      className={`screen-text scroll-snap ${isVisible ? "text-visible" : ""}`}
      ref={ref}
    >
      <div className="screen-heading ">
      {/* {screen?.heading || 'Default Heading'} */}
        {screen.heading1}
        <span>{screen.headingSpan1}</span>
        {screen.heading2}
        <span>{screen.headingSpan2}</span>
        {screen.heading3}
      </div>
      <div className="mobile-mockup-wrapper only-mobile">
        <div className="mobile-mockup ">
          <div className="mobile-mockup-screen flex absolute-center">
            <img
              src={screen.mobile_img}
              className="mobile-screen-img slide-in-right "
              key={screen.mobile_img}
              alt="mockup"
            />
          </div>
        </div>
      </div>
      <div className="screen-description">{screen.description}</div>
    </section>
  );
};

export default ScreenText;

