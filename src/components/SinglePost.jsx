import React from "react";
import Star from "../assets/star.svg";
import Heart from "../assets/heart.svg";
import Comment from "../assets/comment.svg";
import Circle from "../assets/circle_line.svg";
import Bookmark from "../assets/bookmark.svg";
import Dots from "../assets/dots.svg";

const SinglePost = () => {
  const truncateText = (fullText)=>{
    let maxLength = 114
    return fullText.length > maxLength ? `${fullText.slice(0, maxLength)}...` : fullText;
  }

  return (
    <div className="w-full relative py-9">
      {/* header */}
      <div className="post-header flex items-end">
        <div className="h-5 w-5 rounded-full overflow-hidden">
          <img
            src="https://images.unsplash.com/32/RgJQ82pETlKd0B7QzcJO_5912578701_92397ba76c_b.jpg?q=80&w=1024&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            className="w-full h-full bg-cover"
          />
        </div>
        <div>
          <h5 className="ml-2 text-sm tracking-tight">
            Bella L <span className="text-sm text-primary">in</span>{" "}
            ILLUMINATION
          </h5>
        </div>
      </div>
      <div className="flex justify-between w-full mt-4">
        <div className="text-wrap w-60">
          <div className="text-2xl font-bold leading-tight">
            Can You Pass This Apple-Orange Interview At Apple 🍎 ?
          </div>
          <div className="mt-2">
            <p className="leading-tight text-primary font-Inter tracking-tight">
                 {
                    truncateText("Can You Pass This Apple-Orange  Interview At Apple Can You Pass This Apple-Orange Interview At Apple Can You Pass This Apple-Orange Interview At Apple Can You Pass  Interview At Apple Can You Pass This Apple-Orange Interview At Apple Can You Pass This Apple-Orange Interview At Apple Can You Pass This Apple-Orange Interview At Apple")
                 }
            </p>
          </div>
          <div className="post-footer flex items-center justify-between mt-5">
            <div className="post-footer-left flex items-center gap-4 text-xs font-semibold text-primary">
              <img src={Star} alt="" className="w-4 cursor-pointer" />
              <div className="gap-1 cursor-pointer">3days ago</div>
              <div className="flex items-center gap-1 cursor-pointer">
                <img src={Heart} alt="" className="w-4" />
                1.5k
              </div>
              <div className="flex items-center gap-1 cursor-pointer">
                <img src={Comment} alt="" className="w-4 -rotate-90" />
                30
              </div>
            </div>
            <div className="post-footer-right flex items-center gap-5">
              <img src={Circle} alt="" className="w-5 font-thin cursor-pointer hover:brightness-50" />
              <img src={Bookmark} alt="" className="w-5 cursor-pointer hover:brightness-50" />
              <img src={Dots} alt="" className="w-5 cursor-pointer hover:brightness-50" />
            </div>
          </div>
        </div>
        <div className="w-24 h-[105px] overflow-hidden bg-black rounded-sm">
          <img
            src="https://images.unsplash.com/32/RgJQ82pETlKd0B7QzcJO_5912578701_92397ba76c_b.jpg?q=80&w=1024&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            className="object-fill"
          />
        </div>
      </div>

      <div className="w-full bottom-0 absolute h-[1px] bg-gray-back -z-0"></div>
    </div>
  );
};

export default SinglePost;
