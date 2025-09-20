import { useEffect, useState } from "react";
import axios from "axios"; // ✅ Import axios

export const Parallel = () => {
  const [posts, setPosts] = useState<{ id: number; title: string }[]>([]);
  const [users, setUsers] = useState<{ id: number; name: string }[]>([]);
  const [postError, setPostError] = useState("");
  const [userError, setUserError] = useState("");

  const getPosts = async () => {
    try {
      const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
      setPostError(""); // Reset error if successful
      return res.data;  // ✅ Axios puts the response body in res.data
    } catch (error) {
      setPostError("Error fetching posts");
      return []; // Always return an empty array to prevent map() error
    }
  };

  const getUsers = async () => {
    try {
      const res = await axios.get("https://jsonplaceholder.typicode.com/users");
      setUserError(""); // Reset error if successful
      return res.data;  // ✅ Use res.data
    } catch (error) {
      setUserError("Error fetching users");
      return []; // Always return an empty array to prevent map() error
    }
  };

  const mainData = async () => {
    const [postsData, usersData] = await Promise.all([getPosts(), getUsers()]);
    setPosts(postsData);
    setUsers(usersData);
  };

  useEffect(() => {
    mainData();
  }, []);

  return (
    <div className="flex justify-around">
      <div>
        {postError ? (
          <p>{postError}</p>
        ) : (
          posts.map((post) => <p key={post.id}>{post.title}</p>)
        )}
      </div>

      <div>
        {userError ? (
          <p>{userError}</p>
        ) : (
          users.map((user) => <p key={user.id}>{user.name}</p>)
        )}
      </div>
    </div>
  );
};


