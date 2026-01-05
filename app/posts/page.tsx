"use client"
import Link from "next/link";
import React, { use } from "react";

interface Post {
  id: number;
  title: string;
  body: string;
}

export default function Posts() {
  const [posts, setPosts] = React.useState<Post[]>([]);
  
  const fetchPosts = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();
    setPosts(data);
  };

  const clearPosts = () => {
    setPosts([]);
  };

  return (
    <div className="p-8">
      <h1 className="text-4xl my-8">Posts</h1>
      <button className="bg-red-500/50 p-4 rounded-xl hover:bg-red-500 cursor-pointer" onClick={fetchPosts}>Load Posts</button>
      <button className="bg-gray-500/50 p-4 rounded-xl hover:bg-gray-500 cursor-pointer ml-4" onClick={clearPosts}>Clear Posts</button>
      <ul>
        {posts.map((post) => (
          <li key={post.id} className="mb-4">
            <h2 className="text-2xl font-bold">{post.title}</h2>
            <p>{post.body}</p>
            <Link href={`/posts/${post.id}`} className="text-blue-500 hover:underline">Read more</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}