import React, { useEffect, useState } from "react"

export const HtmlEntities = () => {
  const [posts, setPosts] = useState([])

  const getData = async () => {
    try {
      const res = await fetch(
        "https://opentdb.com/api.php?amount=10&type=multiple"
      )
      const data = await res.json()
      setPosts(data.results)
    } catch (error) {
      console.error("Error fetching data:", error)
    }
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <div>
      {posts.length > 0 ? (
        posts.map((post:any, index) => (
        <div key={index}>
            <h1 dangerouslySetInnerHTML={{ __html: post.question }} />
            <p dangerouslySetInnerHTML={{ __html: post.correct_answer }} />
          </div>
        ))
      ) : (
        <p>Loading...</p>
      )}
    </div>
  )
}


