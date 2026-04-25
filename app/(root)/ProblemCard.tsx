import Image from "next/image"
import React from "react"
import Link from "next/link"
import { FaLightbulb } from "react-icons/fa"
import { SlLike } from "react-icons/sl"
import { FaRegComment } from "react-icons/fa6"
import { CiBookmark } from "react-icons/ci"

type Post = {
  id: number
  title: string
  description: string
  category: string
  likes: number
  comments: number
  user: {
    name: string
    role: string
    image: string
  }
}

const ProblemCard = ({ post }: { post: Post }) => {
  return (
    <div className="w-full bg-secondary border border-border rounded-xl p-5 shadow-sm hover:shadow-md transition">

      {/* Header */}
      <div className="flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src={post.user.image}
            width={42}
            height={42}
            alt="user"
            className="rounded-full"
          />

          <div>
            <p className="text-sm font-semibold">{post.user.name}</p>
            <p className="text-xs text-muted-foreground">{post.user.role}</p>
          </div>
        </Link>

        <button className="p-2 border rounded-full hover:bg-muted">
          <CiBookmark />
        </button>
      </div>

      {/* Category */}
      <div className="mt-3">
        <span className="text-xs px-2 py-1 bg-muted rounded-full">
          {post.category}
        </span>
      </div>

      {/* Content */}
      <div className="mt-3">
        <h1 className="text-lg font-bold">{post.title}</h1>
        <p className="text-sm text-muted-foreground mt-1">
          {post.description}
        </p>
      </div>

      {/* Actions */}
      <div className="mt-4 flex items-center gap-5 text-sm text-muted-foreground">
        <button className="flex items-center gap-1 hover:text-foreground">
          <SlLike size={16} />
          <span>{post.likes}</span>
        </button>

        <button className="flex items-center gap-1 hover:text-foreground">
          <FaRegComment size={16} />
          <span>{post.comments}</span>
        </button>

        <button className="flex items-center gap-1 hover:text-primary">
          <FaLightbulb size={16} />
          <span>Solutions</span>
        </button>
      </div>
    </div>
  )
}

export default ProblemCard