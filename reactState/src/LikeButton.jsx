import { useState } from "react";

export default function LikeButton() {
  let [isLiked, setIsLiked] = useState(false);
  let toggleLike = () => {
    setIsLiked(!isLiked);
  };

  let Style = {
        color: "red" 
    };
  return (
    <div>
      <h1 onClick={toggleLike}>
        {isLiked ? (
          <p className="fa-solid fa-heart" style={Style}></p>
        ) : (
          <p className="fa-regular fa-heart"></p>
        )}
      </h1>
    </div>
  );
}
