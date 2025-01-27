import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

interface CreatePostFormProps {
  onSubmit: (post: { title: string; content: string; image?: string; link?: string }) => void;
}

const CreatePostForm = ({ onSubmit }: CreatePostFormProps) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState("");
  const [link, setLink] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!title.trim() || !content.trim()) {
      toast.error("Please fill in all required fields");
      return;
    }

    onSubmit({ title, content, image, link });
    setTitle("");
    setContent("");
    setImage("");
    setLink("");
    toast.success("Post created successfully!");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <Input
          placeholder="Post Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="text-lg"
          required
        />
      </div>
      <div>
        <Textarea
          placeholder="Write your post content..."
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="min-h-[200px]"
          required
        />
      </div>
      <div>
        <Input
          placeholder="Image URL (optional)"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
      </div>
      <div>
        <Input
          placeholder="Related Link (optional)"
          value={link}
          onChange={(e) => setLink(e.target.value)}
        />
      </div>
      <Button type="submit" className="w-full">
        Create Post
      </Button>
    </form>
  );
};

export default CreatePostForm;