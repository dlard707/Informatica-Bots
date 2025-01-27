import { useState } from "react";
import BlogPost from "@/components/BlogPost";
import CreatePostForm from "@/components/CreatePostForm";
import { Button } from "@/components/ui/button";

interface Post {
  id: number;
  title: string;
  content: string;
  image?: string;
  link?: string;
  date: Date;
}

const OctavoAno = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [isCreating, setIsCreating] = useState(false);

  const handleCreatePost = (newPost: Omit<Post, "id" | "date">) => {
    setPosts([{ ...newPost, id: Date.now(), date: new Date() }, ...posts]);
    setIsCreating(false);
  };

  return (
    <div className="min-h-screen bg-[#FDE1D3]">
      <div className="container py-8">
        <div className="max-w-3xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-4xl font-bold text-[#9b87f5]">8vo Año - Informática & Bots</h1>
            <Button
              onClick={() => setIsCreating(!isCreating)}
              variant={isCreating ? "secondary" : "default"}
            >
              {isCreating ? "Cancel" : "Create Post"}
            </Button>
          </div>

          {isCreating && (
            <div className="bg-white p-6 rounded-lg shadow-md mb-8">
              <CreatePostForm onSubmit={handleCreatePost} />
            </div>
          )}

          <div className="space-y-6">
            {posts.map((post) => (
              <BlogPost
                key={post.id}
                {...post}
                date={post.date.toLocaleDateString()}
              />
            ))}
            {posts.length === 0 && !isCreating && (
              <div className="text-center py-12 bg-white rounded-lg">
                <h2 className="text-xl text-gray-600">
                  No posts yet. Be the first to create one!
                </h2>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OctavoAno;