import React, { useRef, useState } from "react";
import Category from "./Category";
import Add from "../assets/add.svg";
import ArrowRight from "../assets/arrow_right.svg";
import ArrowLeft from "../assets/arrow_left.svg";
import ArrowButton from "./ArrowButton";
import AllPosts from "./AllPosts";

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

  const tabStatus = (index) => {
    console.log("yes");
    setActive(index);
  };

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -85, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 75, behavior: "smooth" });
    }
  };

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      setIsScrolling(scrollContainerRef.current.scrollLeft > 0);
    }
  };

  return (
    <div className="h-full flex">
      <div className="left w-full sm:w-71 pt-10">
        <div className="m-auto w-80">
          <div className="flex items-start relative">
            {isScrolling ? (
              <ArrowButton
                arrowName={ArrowLeft}
                position="left"
                functionToScroll={scrollLeft}
              />
            ) : (
              <img
                src={Add}
                alt="Add"
                className="w-5 pt-[1px] cursor-pointer hover:text-black-900 hover:bg-gray-back hover:rounded-full"
              />
            )}
            <div
              className="flex overflow-x-scroll scrollable text-[0.9rem] px-4 relative z-10"
              ref={scrollContainerRef}
              onScroll={handleScroll}
            >
              {names.map((name, index) => {
                return (
                  <Category
                    name={name}
                    key={index}
                    index={index}
                    active={active === index}
                    onClick={tabStatus}
                  />
                );
              })}
            </div>
            <ArrowButton
              arrowName={ArrowRight}
              position={"right"}
              functionToScroll={scrollRight}
            />
            <div className="w-full top-10 absolute h-[1px] bg-gray-back -z-0"></div>
          </div>
          <div>
            <AllPosts/>
          </div>
        </div>
      </div>
      <div className="hidden sm:flex right w-38 border-l-[1px] sticky py-9 px-9">
        ksjfks
      </div>
    </div>
  );
};

export default Home;
