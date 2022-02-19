import { useState } from "react";
import Post from "../post/Post";
import "./posts.css";

export default function Posts() {
  const [posts, setPosts] = useState([
    {
      img: "https://media.istockphoto.com/photos/bloggingblog-concepts-ideas-with-worktable-picture-id922745190?k=20&m=922745190&s=612x612&w=0&h=TqsA7NeMPYXmK1TY5dsbdIsczaUK0OgguehHWdSUqL8=",
      type: "Music Life",
      title: "i love music and love life",
      postDate: "1 hour ago",
      postDescription: "music give me life and every thing",
    },
    {
      img: "https://media.istockphoto.com/photos/bloggingblog-concepts-ideas-with-worktable-picture-id922745190?k=20&m=922745190&s=612x612&w=0&h=TqsA7NeMPYXmK1TY5dsbdIsczaUK0OgguehHWdSUqL8=",
      type: "Music Life",
      title: "i love music and love life",
      postDate: "1 hour ago",
      postDescription: "music give me life and every thing",
    },
    {
      img: "https://media.istockphoto.com/photos/bloggingblog-concepts-ideas-with-worktable-picture-id922745190?k=20&m=922745190&s=612x612&w=0&h=TqsA7NeMPYXmK1TY5dsbdIsczaUK0OgguehHWdSUqL8=",
      type: "Music Life",
      title: "i love music and love life",
      postDate: "1 hour ago",
      postDescription: "music give me life and every thing",
    },
    {
      img: "https://media.istockphoto.com/photos/bloggingblog-concepts-ideas-with-worktable-picture-id922745190?k=20&m=922745190&s=612x612&w=0&h=TqsA7NeMPYXmK1TY5dsbdIsczaUK0OgguehHWdSUqL8=",
      type: "Music Life",
      title: "i love music and love life",
      postDate: "1 hour ago",
      postDescription: "music give me life and every thing",
    },
    {
      img: "https://media.istockphoto.com/photos/bloggingblog-concepts-ideas-with-worktable-picture-id922745190?k=20&m=922745190&s=612x612&w=0&h=TqsA7NeMPYXmK1TY5dsbdIsczaUK0OgguehHWdSUqL8=",
      type: "Music Life",
      title: "i love music and love life",
      postDate: "1 hour ago",
      postDescription: "music give me life and every thing",
    },
    {
      img: "https://media.istockphoto.com/photos/bloggingblog-concepts-ideas-with-worktable-picture-id922745190?k=20&m=922745190&s=612x612&w=0&h=TqsA7NeMPYXmK1TY5dsbdIsczaUK0OgguehHWdSUqL8=",
      type: "Music Life",
      title: "i love music and love life",
      postDate: "1 hour ago",
      postDescription: "music give me life and every thing",
    },
  ]);
  return (
    <div className="posts">
      {posts.map((post, index) => {
        return <Post post={post} key={index} />
      })}
    </div>
  );
}
