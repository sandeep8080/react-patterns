type Post = {
  id: number;
  title: string;
  description: string;
  author: string;
};

type PostCardTypes = {
  post: Post;
};

function PostCard({ post }: PostCardTypes) {
  return (
    <div className="p-2 flex flex-col gap-3 border ">
      <h1 className="text-2xl p-1"> {post.title}</h1>
      <p className="text-sm"> {post.description}</p>

      <p className="text-sm text-gray-400"> {post.author}</p>
      <div className="flex gap-3">
        <button className="border p-2 rounded-sm "> Edit</button>
        <button className="border p-2 rounded-sm "> Delete</button>
      </div>
    </div>
  );
}

export default PostCard;
