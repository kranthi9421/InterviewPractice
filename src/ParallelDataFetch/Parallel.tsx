import { useEffect, useState } from "react";

/* ---------- Types ---------- */

type Post = {
  id: number;
  title: string;
};

type User = {
  id: number;
  name: string;
};

/* ---------- Component ---------- */

export const Parallel = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [users, setUsers] = useState<User[]>([]);
  const [postError, setPostError] = useState<string>("");
  const [userError, setUserError] = useState<string>("");

  const getPosts = async ()=>{
    try {
      const res = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );

      if (!res.ok) throw new Error("Failed to fetch posts");

      setPostError("");
      return await res.json();
    } catch {
      setPostError("Error fetching posts");
      return [];
    }
  };

  const getUsers = async ()=>{
    try {
      const res = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );

      if (!res.ok) throw new Error("Failed to fetch users");

      setUserError("");
      return await res.json();
    } catch {
      setUserError("Error fetching users");
      return [];
    }
  };

  const mainData = async () => {
    const [postsData, usersData] = await Promise.all([
      getPosts(),
      getUsers(),
    ]);

    setPosts(postsData);
    setUsers(usersData);
  };

  useEffect(() => {
    mainData();
  }, []);

  return (
    <div className="flex justify-around">
      <div>
        {postError
          ? <p>{postError}</p>
          : posts.map(post => (
              <p key={post.id}>{post.title}</p>
            ))
        }
      </div>

      <div>
        {userError
          ? <p>{userError}</p>
          : users.map(user => (
              <p key={user.id}>{user.name}</p>
            ))
        }
      </div>
    </div>
  );
};