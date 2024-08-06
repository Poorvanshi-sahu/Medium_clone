import React, { useEffect, useRef, useState } from "react";

const Category = ({ name, active, onClick, index }) => {
  const ref = useRef(null);

  const handleRef=()=>{
      console.log(ref.current);
      
  }

  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (ref.current) {
      setWidth(ref.current.offsetWidth);
      console.log("l",width);
      
    }
  }, [ref.current]);

  return (
    <div>
      <div
        className={`h-full mr-7 whitespace-nowrap pb-5  ${active?'text-black':"text-primary"} font-semibold cursor-pointer hover:text-black-900`}
        onClick={() => {
          onClick(index);
          handleRef()
        }}
        ref={ref}
      >
        {name}
      </div>
      {active && <div className="absolute bg-black h-[1px] top-10" style={{ width: `${width}px` }}></div>}
    </div>
  );
};

export default Category;
