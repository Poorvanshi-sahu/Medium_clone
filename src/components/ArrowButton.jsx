import React from "react";

const ArrowButton = ({ arrowName, position, functionToScroll }) => {
  console.log(position);

  return (
    <div className={`w-7 ${position==="left"?"bg-gradient-to-r":"bg-gradient-to-l"} from-white via-white`}>
      <img
        src={arrowName}
        alt=""
        className="w-5 h-full cursor-pointer pt-[1px]"
        onClick={() => {
          functionToScroll();
        }}
      />
    </div>
  );
};

export default ArrowButton;
