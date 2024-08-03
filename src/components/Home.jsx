import React from "react";
import Category from "./Category";
import Add from "../assets/add.svg"
import ArrowRight from "../assets/arrow_right.svg"
import ArrowLeft from "../assets/arrow_left.svg"

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
  return (
    <div className="flex h-full relative">
      <div className="left w-full sm:w-71 pt-5">
        <div className="m-auto w-10/12 categories border-b-[1px] leading-[4rem] flex items-center gap-x-7 text-sm font-semibold overflow-x-hidden relative">
        <img src={Add} alt="" className="w-5 cursor-pointer hover:text-black-900 hover:bg-gray-back hover:rounded-full h-max"/>
           {
               names.map((name)=>{
                  return <Category name={name} active={true}/>
               })
           }
          <div className="px-10 absolute right-0 h-full flex -items bg-gradient-to-l from-white via-white">
             <img src={ArrowRight} alt="" className="w-5 cursor-pointer"/>
          </div>
        </div>
      </div>
      <div className="hidden sm:flex right w-38 border-l-[1px] sticky py-9 px-9">ksjfks</div>
    </div>
  );
};

export default Home;
