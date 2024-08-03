import React from 'react'


const Category = ({name, active}) => {

  return (
   
    <div className={`w-full ${active?"text-black":""} text-primary whitespace-nowrap cursor-pointer hover:text-black-900`}>{name}</div>

  )
}

export default Category