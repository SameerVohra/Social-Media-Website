import React, { useEffect, useState } from "react";
import appwriteService from "../appwrite/config.js";
import { Container, PostCard } from "../components/index.js";

function Home() {
  const [post, setPost] = useState([]);
  useEffect(() => {
    appwriteService.getPosts().then((post) => {
      if (post) {
        setPost(post.documents);
      }
    });
  }, []);

  if (post.length === 0) {
    return (
      <div>
        <div className="w-full py-8 mt-4 text-center">
          <Container>
            <div className="flex flex-wrap">
              <div className="p-2 w-full">
                <h1 className="text-2xl font-bold hover:text-white transition-all">
                  Login to read posts
                </h1>
              </div>
            </div>
          </Container>
        </div>
      </div>
    );
  } else {
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
}

export default Home;
