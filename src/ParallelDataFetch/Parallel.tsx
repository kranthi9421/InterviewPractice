import { useEffect, useState } from "react";

type Post = {
  id: number;
  title: string;
};

type User = {
  id: number;
  name: string;
};

export const Parallel = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [postsRes, usersRes] = await Promise.all([
          fetch("https://jsonplaceholder.typicode.com/posts"),
          fetch("https://jsonplaceholder.typicode.com/users"),
        ]);

        if (!postsRes.ok || !usersRes.ok) {
          throw new Error("Something went wrong");
        }

        const [postsData, usersData] = await Promise.all([
          postsRes.json(),
          usersRes.json(),
        ]);

        setPosts(postsData);
        setUsers(usersData);
      } catch (err) {
        setError("Error fetching data");
      }
    };

    fetchData();
  }, []);

  return (
    <div className="flex justify-around">
      <div>
        {error
          ? <p>{error}</p>
          : posts.map(post => <p key={post.id}>{post.title}</p>)
        }
      </div>

      <div>
        {error
          ? <p>{error}</p>
          : users.map(user => <p key={user.id}>{user.name}</p>)
        }
      </div>
    </div>
  );
};