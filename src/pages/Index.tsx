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
}

const Index = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [isCreating, setIsCreating] = useState(false);

  const handleCreatePost = (newPost: Omit<Post, "id">) => {
    setPosts([{ ...newPost, id: Date.now() }, ...posts]);
    setIsCreating(false);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container py-8">
        <div className="max-w-3xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-4xl font-bold text-gray-900">Educational Blog</h1>
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
              <BlogPost key={post.id} {...post} />
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

export default Index;