import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";

const Carousel = ({ children, id = 'projectModalCarousel', noRightArrow = false, noLeftArrow = false, insideArrow = false, infinite = false }) => {
    const [carIndex, setCarIndex] = useState({
      skillsCarousel: 1,
      projectsCarousel: 1,
      projectModalCarousel: 1
    });
    const [target, setTarget] = useState();
    const [enabledArrows, setEnabledArrows] = useState([!infinite ? true : false, false]);
  
    const onCarouselChange = (e, id) => {
      setTarget(e.currentTarget.dataset.carousel);

      var updateValue = {};
      updateValue[target] = carIndex[target] + (1 * id);
      setCarIndex(prevCarIndex => ({
        ...prevCarIndex,
        ...updateValue
      }));
    }

    useEffect(() => {
      let carousel = document.getElementById(target);
      if (!carousel)
        return;

      let style = getComputedStyle(carousel.children[0]);
      carousel.style.left = `-${(parseInt(style.marginRight.replace('px', '')) + carousel.children[0].offsetWidth) * (carIndex[target] % carousel.children.length)}px`;

      if(!infinite) {
        if (carIndex[target] === 0) {
          carousel.parentElement.children[0].style.filter = 'brightness(0.2)';
          setEnabledArrows(prevVal => prevVal = [true, false]);
        }
        else if (carIndex[target] === carousel.children.length - 1)
        {
          carousel.parentElement.children[2].style.filter = 'brightness(0.2)';
          setEnabledArrows(prevVal => prevVal = [false, true]);
        }
        else {
          carousel.parentElement.children[2].style.filter = 'brightness(1)';
          carousel.parentElement.children[0].style.filter = 'brightness(1)';
          setEnabledArrows(prevVal => prevVal = [false, false]);
        }
      }

      // eslint-disable-next-line
    }, [carIndex]);
    return (
        <>
          <div className="carousel-container">
            {noLeftArrow ? '' : <button disabled={enabledArrows[0]} className="carousel-control carousel-left" data-carousel={id} onClick={(event) => onCarouselChange(event, -1)} ><FontAwesomeIcon icon={faAngleLeft} /></button>}
            <div id={id} className="carousel">
                {children}
            </div>
            {noRightArrow ? '' : <button disabled={enabledArrows[1]} className={`carousel-control carousel-right${insideArrow ? '-in' : ''}`} data-carousel={id} onClick={(event) => onCarouselChange(event, 1)} ><FontAwesomeIcon icon={faAngleRight} /></button>}
          </div>
        </>
    )
};

export default Carousel;