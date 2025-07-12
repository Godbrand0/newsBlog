import React, { useEffect, useState } from "react";
import PostSkeleton from "../components/PostSkeleton";
import API from "../services/api";
import PostCard from "../components/PostCard";

export default function Home() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
    API.get("/posts")
      .then((res) => setPosts(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="mt-28">
      {loading ? (
        <div className="w-full">
          <PostSkeleton />
          <PostSkeleton />
          <PostSkeleton />
          <PostSkeleton />
        </div>
      ) : (
        <>
          <h1 className="text-xl font-bold mb-4">Latest News</h1>
          <div className="">
            {posts.map((post) => (
              <PostCard key={post._id} post={post} />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
