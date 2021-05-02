import React from "react";
import Carousel, { consts, Button } from "react-elastic-carousel";
import "./style.scss";
const SliderMenu = () => {
  return (
    <div className="sliderMenu">
      <Carousel
        className="carousel"
        disableArrowsOnEnd={true}
        pagination={false}
        itemsToShow={6}
      >
        <p>СУПЫ</p>
        <p>ХАЧАПУРИ</p>
        <p>ХАЧАПУРИ</p>
        <p>СУПЫ</p>
        <p>ХАЧАПУРИ</p>
        <p>СУПЫ</p>
        <p>ХАЧАПУРИ</p>
      </Carousel>
    </div>
  );
};

export default SliderMenu;
