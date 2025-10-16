import { getPosts } from "@/lib/api";
import { Post } from "@/lib/types";
import Link from "next/link";
import { MessageCircle, Calendar } from "lucide-react";

function computeScore(post: Post) {
  const points = post.points ?? 0;
  const comments = post.num_comments ?? 0;

  const createdAt = new Date(post.created_at).getTime();
  const ageHours = (Date.now() - createdAt) / (1000 * 60 * 60);

  const recencyScore = 1 / Math.pow(ageHours + 2, 1.5);
  return points + comments + recencyScore * 100;
}

export default async function Page({
  params,
}: {
  params: Promise<{ page: string }>;
}) {
  const { page } = await params;
  const currentPage = Number(page ?? 0);
  const data = await getPosts(currentPage);
  const posts: Post[] = (data?.hits ?? []).map((h: any) => ({
    id: String(h.objectID ?? h.id ?? ""),
    created_at: h.created_at,
    author: h.author,
    title: h.title,
    url: h.url,
    points: h.points,
    num_comments: h.num_comments,
  }));

  if (!posts?.length) return <p>No posts found</p>;

  const postsWithScore = posts.map((p) => ({
    ...p,
    score: computeScore(p),
  }));
  postsWithScore.sort((a, b) => b.score - a.score);

  return (
    <div className="container p-4">
      <h1 className="text-4xl text-orange-600 font-bold text-center pt-4">
        HN Scout - News
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8 p-4">
        {postsWithScore.map((post) => (
          <Link
            href={`/item/${post.id}`}
            key={post.id}
            className="border border-gray-200 rounded-md p-4 hover:shadow-sm hover:shadow-orange-600 transition-all duration-200 hover:scale-105 ease-in-out"
          >
            <h2 className="text-lg font-bold text-center">{post.title}</h2>

            <p className="text-sm text-gray-500 text-center mb-4">
              By {post.author}
            </p>
            <div className="flex justify-between gap-2 mx-4">
              <p className="flex gap-1 text-sm text-gray-500">
                <Calendar
                  size={16}
                  aria-label={`Created at: ${post.created_at}`}
                />{" "}
                {post.created_at}
              </p>
              <p className="flex gap-1 text-sm text-gray-500">
                <MessageCircle
                  size={16}
                  aria-label={`Number of comments: ${post.num_comments}`}
                />{" "}
                {post.num_comments}
              </p>
              <span
                className="bg-gray-400 text-white text-xs px-2 py-1 rounded-full"
                aria-label={`Score: ${Math.round(post.score)}`}
              >
                {Math.round(post.score)}
              </span>
            </div>
          </Link>
        ))}
      </div>

      <div className="text-center flex-col my-auto">
        <p className="text-sm text-gray-500 mb-2">Page {currentPage}</p>
        <div className="text-gray-500">
          {currentPage > 0 && (
            <Link
              href={`/${currentPage - 1}`}
              className="mr-2 text-orange-600 hover:underline mb-6 inline-block cursor-pointer"
            >
              Previous
            </Link>
          )}
          {currentPage < 20 && (
            <Link
              href={`/${currentPage + 1}`}
              className="text-orange-600 hover:underline mb-6 inline-block cursor-pointer"
            >
              Next
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
