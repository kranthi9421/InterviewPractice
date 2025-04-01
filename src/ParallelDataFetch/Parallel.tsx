import { useEffect, useState } from "react"

export const Parallel = () => {
  const [posts, setPosts] = useState<{ id: number; title: string }[]>([])
  const [users, setUsers] = useState<{ id: number; name: string }[]>([])
  const [postError, setPostError] = useState("")
  const [userError, setUserError] = useState("")

  const getPosts = async () => {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts")
      if (!res.ok) throw new Error("Failed to fetch posts")
      setPostError("") // Reset error if successful
      return await res.json()
    } catch (error) {
      setPostError("Error fetching posts")
      return [] // Always return an empty array to prevent map() error
    }
  }

  const getUsers = async () => {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/users")
      if (!res.ok) throw new Error("Failed to fetch users")
      setUserError("") // Reset error if successful
      return await res.json()
    } catch (error) {
      setUserError("Error fetching users")
      return [] // Always return an empty array to prevent map() error
    }
  }

  const mainData = async () => {
    const [postsData, usersData] = await Promise.all([getPosts(), getUsers()])
    setPosts(postsData) // postsData will always be an array, preventing map() error
    setUsers(usersData) // usersData will always be an array, preventing map() error
  }

  useEffect(() => {
    mainData()
  }, [])

  return (
    <>
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
    </>
  )
}


