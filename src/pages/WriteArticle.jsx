import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import InputField from '../components/InputField'

const WriteArticle = () => {
  const [focusedField, setFocusedField] = useState("story")
  return (
    <div>
        <Navbar/>
        <div className='m-auto w-8/12 mt-10 h-max'>
           <InputField type={"text"} placeholder={"Title"} label="title" setFocusedField={setFocusedField} focusedField={focusedField}/>
           <InputField type={"text"} placeholder={"Tell your story..."} label="story" setFocusedField={setFocusedField} focusedField={focusedField}/>
        </div>
    </div>
  )
}

export default WriteArticle