import type { PostCardTypes } from './PostCardContainer';
import { useContext, createContext } from 'react';

export const PostContext = createContext<PostCardTypes | undefined>(undefined);

export const usePostData = () => {
  const context = useContext(PostContext);
  if (!context) {
    throw new Error('usePostData must be used within a PostCardContainer');
  }
  return context;
};
