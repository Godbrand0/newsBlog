import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { FaHeart, FaRegHeart } from "react-icons/fa";
import moment from "moment";
import axios from "axios";

export default function PostCard({ post }) {
  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(post.likes || 0);

  useEffect(() => {
    const likedPosts = JSON.parse(localStorage.getItem("likedPosts")) || [];

    if (likedPosts.includes(post._id)) {
      setLiked(true);
    }
  }, [post._id]);

  const handleLike = async () => {
    if (liked) {
      return;
    }

    try {
      const res = await axios.patch(
        `http://localhost:4000/api/posts/${post._id}/like`
      );
      setLikes(res.data.likes);
      setLiked(true);

      // save to localstorage
      const likedPosts = JSON.parse(localStorage.getItem("likedPosts")) || [];
      likedPosts.push(post._id);
      localStorage.setItem("likedPosts", JSON.stringify(likedPosts));
    } catch (error) {
      console.error("error liking post:", error.message);
    }
  };
  return (
    <div className="mt-28">
      <div className="w-full bg-white rounded-lg shadow-md p-5 mb-6 hover:shadow-lg transition ">
        {post.images?.length > 0 && (
          <img
            src={post.images[0]}
            alt={post.title}
            className="w-full h-48 object-cover"
          />
        )}
        <h1 className="text-2xl font-bold text-gray-800 mb-2">{post.title}</h1>
        <p className="text-xs text-gray-400 mb-2">
          {moment(post.createdAt).fromNow()}
        </p>
        <p className="text-gray-600 mb-4 line-clamp-3">{post.snippet}</p>
        <div className="flex items-center justify-between">
          <Link
            to={`/post/${post.id}`}
            className="text-blue-600 font-medium hover:underline"
          >
            Read more
          </Link>
          <button
            onClick={handleLike}
            disabled={liked}
            className="flex items-center gap-1 cursor-pointer"
          >
            {liked ? (
              <FaHeart
                size={16}
                className="text-red-500 hover:text-red-600 transition"
              />
            ) : (
              <FaRegHeart size={16} className="text-gray-400" />
            )}
            <span className="text-sm">{likes}</span>
          </button>
        </div>
      </div>
    </div>
  );
}
