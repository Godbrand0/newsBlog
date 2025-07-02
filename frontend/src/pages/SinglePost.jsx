import axios from "axios";
import moment from "moment";
import React from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

export default function SinglePost() {
  const [post, setPost] = React.useState(null);
  const [loading, setLoading] = React.useState(true);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:4000/api/posts/${id}`)
      .then((res) => {
        setPost(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching post:", err);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p>loading...</p>;
  if (!post) return <p>Post not found</p>;
  return (
    <div className="max-w-3xl mx-auto mt-16 px-4">
      <h1 className="text-3xl font-bold text-gray-800 mb-2">{post.title}</h1>
      <p className="text-sm text-gray-400 mb-4">
        {moment(post.createdAt).fromNow()}
      </p>

      {post.images?.length > 0 && (
        <div className="grid gap-4 mb-6">
          {post.images.map((imgUrl, index) => (
            <img
              src={imgUrl}
              alt={`post image ${index + 1}`}
              key={index}
              className="w-full h-64 object-cover rounded"
            />
          ))}
        </div>
      )}
      <p className="text-gray-700 leading-7 whitespace-pre-line">
        {post.content}
      </p>
    </div>
  );
}
