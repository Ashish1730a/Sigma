import{useState} from "react";

export default function LikeButton() {
    let [isLiked, setIsLiked] = useState(false);
    let toggleLike = () => {
        setIsLiked(!isLiked);
    };
    return (
        <div>
            <p onClick={toggleLike}>
                {isLiked}
            </p>
        </div>
    )
}