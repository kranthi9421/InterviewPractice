import React, { Suspense, useEffect, useState } from "react"

const Users = React.lazy(() => import("./Users"))

type Props = {
   id : number
   title : string
   userId : number
}[]

export const Sequential = () => {
  const [posts, setPosts] = useState<Props>([])
  
  const filteredPosts = posts.filter((post) => post.id % 10 === 1)
  
  const getPosts = async () => {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts")
      const postData = await res.json()
      setPosts(postData)
    } catch (error) {
      console.error("Error fetching posts:", error)
    }
  }
  useEffect(() => {
    getPosts()
  }, [])

  return (
    <div>
      {filteredPosts.length > 0 ? (
        filteredPosts.map((post) => (
          <div key={post.id}>
            <p>{post.title}</p>
            <Suspense fallback={<p>Loading user...</p>}>
              <Users userId={post.userId} />
            </Suspense>
          </div>
        ))
      ) : (
        <p>Loading posts...</p>
      )}
    </div>
  )
}
