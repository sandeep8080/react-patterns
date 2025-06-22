import { PostContext, usePostData } from './usePostData';
import type { PropsWithChildren } from 'react';

export type Post = {
  id: number;
  title: string;
  description: string;
  author: string;
};

export type PostCardTypes = PropsWithChildren & {
  post: Post;
};

function PostCardContainer({ children, post }: PostCardTypes) {
  return (
    <div className="p-2 flex flex-col gap-3 border ">
      <PostContext.Provider value={{ post }}>
        {children}
        <div className="flex gap-3">
          <button className="border p-2 rounded-sm "> Edit</button>
          <button className="border p-2 rounded-sm "> Delete</button>
        </div>
      </PostContext.Provider>
    </div>
  );
}

export default PostCardContainer;

PostCardContainer.Title = function PostCardTitle() {
  const { post } = usePostData();
  return <h1 className="text-2xl p-1"> {post.title}</h1>;
};

PostCardContainer.Description = function PostCardDescription() {
  const { post } = usePostData();
  return <p className="text-sm"> {post.description}</p>;
};

PostCardContainer.Author = function PostCardAuthor() {
  const { post } = usePostData();
  return <p className="text-sm text-gray-400"> {post.author}</p>;
};
