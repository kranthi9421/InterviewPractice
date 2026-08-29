import React, { Suspense, useEffect, useState } from "react";

const Users = React.lazy(() => import("./Users"));

type Post = {
  id: number;
  title: string;
  userId: number;
};

export const Sequential = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const getPosts = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts"
        );

        const data: Post[] = await response.json();

        setPosts(data);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    getPosts();
  }, []);

  const filteredPosts = posts.filter(
    (post) => post.id % 10 === 1
  );

  return (
    <div>
      {filteredPosts.map((post) => (
        <div key={post.id}>
          <p>{post.title}</p>

          <Suspense fallback={<p>Loading user...</p>}>
            <Users userId={post.userId} />
          </Suspense>
        </div>
      ))}
    </div>
  );
};