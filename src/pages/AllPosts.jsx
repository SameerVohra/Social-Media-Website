import React, { useEffect, useState } from "react";
import appwriteService from "../appwrite/config.js";
import { PostCard, Container } from "../components/index.js";

function AllPosts() {
  const [post, setPost] = useState([]);
  useEffect(() => {}, []);
  appwriteService.getPosts([]).then((post) => {
    if (post) {
      setPost(post.documents);
    }
  });
  return (
    <div className="w-full py-8">
      <Container>
        <div className="flex flex-wrap">
          {post.map((post) => (
            <div key={post.$id} className="p-2 w-1/4">
              <PostCard {...post} />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}

export default AllPosts;
