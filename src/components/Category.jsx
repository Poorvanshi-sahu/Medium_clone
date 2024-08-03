import React from 'react'

const Category = ({name, active, onClick, index}) => {
  console.log("S",active);
  
  return (
    
    <div className={`${active?'border-b-[1px] border-black-900':""} text-primary whitespace-nowrap cursor-pointer hover:text-black-900 mr-7`} onClick={()=>onClick(index)}>{name}</div>
    
  )
}

export default Category