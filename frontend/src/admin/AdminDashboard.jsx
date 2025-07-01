import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function AdminDashboard() {
  const [posts, setPosts] = useState([]);

  const fetchPosts = async () => {
    try {
      const res = await axios.get("http://localhost:4000/api/posts");
      setPosts(res.data);
    } catch (error) {
      console.log("error fetching posts:", error.message);
    }
  };

  const handleDelete = async (_id) => {
    if (!window.confirm("Are you sure")) return;

    try {
      await axios.delete(`http://localhost:4000/api/posts/${_id}`);
      fetchPosts();
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    fetchPosts();
  });
  return (
    <div className="p-6 mt-24">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Admin DashBoard</h1>
        <Link
          to="/admin/create"
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          + create post
        </Link>
      </div>

      <div className="space-y-4 ">
        {posts.map((post) => (
          <div
            key={post._id}
            className="p-4 items-center bg-gray-100 rounded shadow flex justify-between"
          >
            <div>
              <h2 className="font-semibold">{post.title}</h2>
              <p className="text-sm text-gray-600">{post.snippet}</p>
            </div>
            <div className="flex items-center gap-3">
              <Link
                className="text-blue-600 hover:underline cursor-pointer"
                to={`/admin/edit/${post.id}`}
              >
                Edit
              </Link>
              <button
                className="text-red-600 cursor-pointer"
                onClick={() => handleDelete(post._id)}
              >
                <FaTrash />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
