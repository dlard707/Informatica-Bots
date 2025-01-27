import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface BlogPostProps {
  title: string;
  content: string;
  image?: string;
  link?: string;
  date: string;
}

const BlogPost = ({ title, content, image, link, date }: BlogPostProps) => {
  return (
    <Card className="w-full mb-6 hover:shadow-lg transition-shadow">
      <CardHeader>
        <div className="flex justify-between items-center">
          <CardTitle className="text-2xl font-bold">{title}</CardTitle>
          <span className="text-sm text-gray-500">{date}</span>
        </div>
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