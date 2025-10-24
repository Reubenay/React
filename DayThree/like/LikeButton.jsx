import { useState } from "react";
import "./LikeButton.css";

function LikeButton() {
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(0);
  const [disabled, setDisabled] = useState(false);

  const handleLike = () => {
    if (disabled) return;

    setDisabled(true);
    setTimeout(() => setDisabled(false), 1000);

    if (liked) {
      setLiked(false);
      setLikeCount(likeCount - 1);
    } else {
      setLiked(true);
      setLikeCount(likeCount + 1);
    }
  };

  return (
    <div className="gen-container">
      <div className="like-container">
        <button
          onClick={handleLike}
          disabled={disabled}
          className={`like-button ${liked ? "liked" : "unliked"}`}
        >
          {liked ? "❤️ Liked" : "🤍 Like"}
        </button>
        <p className="like-text">
          {likeCount} {likeCount === 1 ? "like" : "likes"}
        </p>
      </div>
    </div>
  );
}

export default LikeButton;
