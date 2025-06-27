import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import API from "../services/api";

export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    API.get("/posts")
      .then((res) => setPosts(res.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="mt-28">
      <h1>Latest news</h1>
      {posts.map((post) => (
        <div key={post._id}>
          <h1>{post.title}</h1>
          <p>{post.snippet}</p>
          <Link to={`/post/${post.id}`}>Read more</Link>
          <button>{post.likes}</button>
        </div>
      ))}
    </div>
  );
}
