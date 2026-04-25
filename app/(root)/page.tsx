'use client'

import React, { useEffect, useState } from "react"
import ProblemCard from "./ProblemCard"

const Feed = () => {
  const [posts, setPosts] = useState<any[]>([])

  useEffect(() => {
    const getPosts = async () => {
      const res = await fetch("/data/problem.json")
      const data = await res.json()
      setPosts(data)
    }

    getPosts()
  }, [])

  return (
    <div className="space-y-4">
      {posts.map((post) => (
        <ProblemCard key={post.id} post={post} />
      ))}
    </div>
  )
}

export default Feed