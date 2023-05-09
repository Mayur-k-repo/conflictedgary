import React from "react";

import {styled} from "@material-ui/core/styles";

const RootStyle = styled('div')(({ theme }) => ({

}));

function Customcarousel() {
  let imageUrlArray = [];

  for (let i = 1; i <= 11; i++) {
    imageUrlArray.push(
      <div className="slide">
        <img
          src={`images/art/${i}.png`}
        ></img>
      </div>
    );
  }
  imageUrlArray = imageUrlArray.concat(imageUrlArray);

  return (
      <RootStyle  style={{margin:"50px 0"}}>
    <div className="project-slider" >
      <div className=" text-center text-dark" style={{ overflow: "hidden" }}>
        <div className="row slider-content" style={{ flexDirection: "column" }}>
          <div className={"slider"}>
            <div className={"slider-track"}>
              {imageUrlArray}
            </div>
          </div>
        </div>
      </div>
    </div>
      </RootStyle>
  );
}

export default Customcarousel;
