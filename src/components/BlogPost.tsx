import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface BlogPostProps {
  title: string;
  content: string;
  image?: string;
  link?: string;
}

const BlogPost = ({ title, content, image, link }: BlogPostProps) => {
  return (
    <Card className="w-full mb-6 hover:shadow-lg transition-shadow">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        {image && (
          <img
            src={image}
            alt={title}
            className="w-full h-64 object-cover rounded-md mb-4"
          />
        )}
        <p className="text-gray-700 mb-4 whitespace-pre-wrap">{content}</p>
        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline"
          >
            Related Resource →
          </a>
        )}
      </CardContent>
    </Card>
  );
};

export default BlogPost;