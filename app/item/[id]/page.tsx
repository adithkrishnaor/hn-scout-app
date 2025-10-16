import { getPostById } from "@/lib/api";
import { HNComment } from "@/lib/types";
import { ExternalLink, MessageCircle, TrendingUp, User } from "lucide-react";
import Link from "next/link";

export async function generateMetadata({ params }: { params: { id: string } }) {
  const { id } = params;
  const post = await getPostById(id);
  return {
    title: post ? `${post.title} - HN Scout` : "Post not found - HN Scout",
    description: post?.title || "Post not found",
  };
}

export default async function PostDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const { id } = params;
  const post = await getPostById(id);
  if (!post) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Link
          href="/1"
          className="text-orange-600 cursor-pointer hover:underline mb-6 inline-block"
        >
          ← Back
        </Link>
        <div className="bg-white rounded-lg shadow-md border p-8">
          <h1 className="text-2xl font-bold text-gray-900">Post not found</h1>
        </div>
      </div>
    );
  }
  const domain = post.url ? new URL(post.url).hostname : null;
  const comments = post.children?.slice(0, 5) || [];

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-4xl text-orange-600 font-bold text-center">
        HN Scout - News
      </h1>
      <Link
        href="/1"
        className="text-orange-600 hover:underline mb-6 inline-block"
      >
        ← Back
      </Link>

      <article className=" rounded-lg shadow-md border p-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">{post.title}</h1>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          <div className="flex items-center gap-2">
            <User size={20} />
            <div>
              <div className="text-xs text-gray-500">Author</div>
              <div className="font-semibold">{post.author}</div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <TrendingUp size={20} />
            <div>
              <div className="text-xs text-gray-500">Points</div>
              <div className="font-semibold">{post.points}</div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <MessageCircle size={20} />
            <div>
              <div className="text-xs text-gray-500">Comments</div>
              <div className="font-semibold">{post.children?.length || 0}</div>
            </div>
          </div>
        </div>

        <div className="flex gap-4 mb-8 justify-between">
          {domain && (
            <div className="md:mt-2">
              <span className="text-sm text-gray-500">Domain: </span>
              <Link href={domain}>
                <span className="text-orange-600 font-medium">{domain}</span>
              </Link>
            </div>
          )}
          {post.url && (
            <Link
              href={post.url}
              className="flex items-center gap-2 mr-2 px-6 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600"
            >
              Visit <ExternalLink size={18} />
            </Link>
          )}
        </div>

        {comments.length > 0 && (
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Latest Comments
            </h2>
            <div className="space-y-4">
              {comments.map((comment: HNComment) => (
                <div
                  key={comment.id}
                  className="bg-gray-50 rounded-lg p-4 border"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <User size={16} className="text-gray-500" />
                    <span className="font-semibold text-gray-700">
                      {comment.author}
                    </span>
                  </div>
                  <div
                    className="text-gray-700 prose prose-sm max-w-none"
                    dangerouslySetInnerHTML={{ __html: comment.text }}
                  />
                </div>
              ))}
            </div>
          </div>
        )}
      </article>
    </div>
  );
}
