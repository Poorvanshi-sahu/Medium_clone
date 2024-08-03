import React, { useRef, useState } from "react";
import Category from "./Category";
import Add from "../assets/add.svg"
import ArrowRight from "../assets/arrow_right.svg"
import ArrowLeft from "../assets/arrow_left.svg"
import ArrowButton from "./ArrowButton";

const names = [
  "For you",
  "Following",
  "Technology",
  "Productivity",
  "Self Improvement",
  "Javascript",
  "Software Development",
];

const Home = () => {
  const [isScrolling, setIsScrolling] = useState(false);  
  const [active, setActive] = useState(0);
  const scrollContainerRef = useRef(false);

  const tabStatus = (index) =>{
    console.log("yes");
    setActive(index)

  }

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -85, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 75, behavior: 'smooth' });
    }
  };

  const handleScroll = () => {
    if(scrollContainerRef.current){
        setIsScrolling(scrollContainerRef.current.scrollLeft > 0);
    }
  };


  return (
    <div className="flex h-full relative">
      <div className="left w-full sm:w-71 pt-5">
        <div className={`m-auto w-10/12 border-b-[1px] leading-[4rem] flex items-center relative`} >
          {
            isScrolling? <ArrowButton arrowName={ArrowLeft} position="left" functionToScroll={scrollLeft}/> : <img src={Add} alt="Add" className="w-5 cursor-pointer hover:text-black-900 hover:bg-gray-back hover:rounded-full h-max mr-7"/>
        }
        <div className="flex items-center scrollable text-sm leading-[4rem] font-semibold overflow-x-auto" ref={scrollContainerRef} onScroll={handleScroll}>
        {
               names.map((name,index)=>{
                   return <Category name={name} index={index} key={index} onClick={tabStatus} active={active===index}/>
                })
            }
        </div>
          <ArrowButton arrowName={ArrowRight} position="right" functionToScroll={scrollRight} />
        </div>
      </div>
      <div className="hidden sm:flex right w-38 border-l-[1px] sticky py-9 px-9">ksjfks</div>
    </div>
  );
};

export default Home;
