import { useEffect, useState } from "react";

type User = {
  name: string;
};

const Users = ({ userId }: { userId: number }) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
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

    getData();
  }, [userId]);

  if (!user) {
    return <p>Loading user...</p>;
  }

  return (
    <span>
      UserName: {user.name}
    </span>
  );
};

export default Users;