import React from 'react'

const ArrowButton = ({arrowName, position, functionToScroll}) => {
 console.log(position);
 
  return (
    <div className={`absolute ${position}-0 h-full flex ${position==="left"?"bg-gradient-to-r pr-10 pl-2":"bg-gradient-to-l pl-10 pr-2"} from-white via-white`}>
        <img src={arrowName} alt="" className="w-5 cursor-pointer" onClick={()=>{functionToScroll()}}/>
    </div>
  )
}

export default ArrowButton