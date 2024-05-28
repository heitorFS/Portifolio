import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";

const Carousel = ({ children, id = 'projectModalCarousel', noRightArrow = false, noLeftArrow = false, insideArrow = false, infinite = false }) => {
    const [carIndex, setCarIndex] = useState(0);
    const [target, setTarget] = useState();
    const [enabledArrows, setEnabledArrows] = useState([!infinite ? true : false, false]);
  
    const onCarouselChange = (e, ident) => {
      setTarget(e.currentTarget.parentElement.children[1]);
      setCarIndex(prevCarIndex => prevCarIndex + (1 * ident));
    }

    useEffect(() => {
      if (!target)
        return;

      let style = getComputedStyle(target.children[0]);
      target.style.left = `-${(parseInt(style.marginRight.replace('px', '')) + target.children[0].offsetWidth) * (carIndex % target.children.length)}px`;

      if(!infinite) {
        if (carIndex === 0) {
          target.parentElement.children[0].style.filter = 'brightness(0.2)';
          setEnabledArrows(prevVal => prevVal = [true, false]);
        }
        else if (carIndex === target.children.length - 1)
        {
          target.parentElement.children[2].style.filter = 'brightness(0.2)';
          setEnabledArrows(prevVal => prevVal = [false, true]);
        }
        else {
          target.parentElement.children[2].style.filter = 'brightness(1)';
          target.parentElement.children[0].style.filter = 'brightness(1)';
          setEnabledArrows(prevVal => prevVal = [false, false]);
        }
      }

      // eslint-disable-next-line
    }, [carIndex]);
    return (
        <>
          <div className="carousel-container">
            <button disabled={enabledArrows[0]} className="carousel-control carousel-left" style={{display: noLeftArrow ? 'none' : 'block'}} data-carousel={id} onClick={(event) => onCarouselChange(event, -1)} ><FontAwesomeIcon icon={faAngleLeft} /></button>
            <div id={id} className="carousel">
                {children}
            </div>
            <button disabled={enabledArrows[1]} className={`carousel-control carousel-right${insideArrow ? '-in' : ''}`} style={{display: noRightArrow ? 'none' : 'block'}} data-carousel={id} onClick={(event) => onCarouselChange(event, 1)} ><FontAwesomeIcon icon={faAngleRight} /></button>
          </div>
        </>
    )
};

export default Carousel;