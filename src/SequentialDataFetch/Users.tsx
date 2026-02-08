import { useEffect, useState } from "react";

/* ---------- Types ---------- */

type User = {
  name: string;
};

/* ---------- Component ---------- */

const Users = ({ userId }: {userId: number}) => {
  const [user, setUser] = useState<User | null>(null);

  const getData = async () => {
    try {
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/users/${userId}`
      );
      const data: User = await res.json();
      setUser(data);
    } catch (error) {
      console.error("Error fetching user:", error);
    }
  };

  useEffect(() => {
    getData();
  }, [userId]);

  if (!user) return <p>Loading user...</p>;

  return (
    <span className="text-red-950 text-2xl">
      UserName: {user.name}
    </span>
  );
};

export default Users;
