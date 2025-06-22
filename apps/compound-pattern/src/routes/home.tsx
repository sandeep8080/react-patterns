import PostCardContainer from '@/components/with-pattern/PostCardContainer';
import PostCard from '@/components/without-pattern/PostCard';

export function HomePage() {
  /**
   * Now problem statement is that if I need to use this <PostCard/> component elsewhere and there I want to tweak the arrangements like showing author at the top or not showing certain buttons.
   * In that case, I can use the PostCardContainer component which is using compound pattern to achieve this.
   * The PostCardContainer component allows you to use the PostCard component in a more flexible way, where you can choose which parts to display and in what order.
   * For example, you can use the PostCardContainer to display the author at the top, or you can choose not to display the edit and delete buttons.
   */
  return (
    <div className="container relative mx-auto max-w-screen-xl px-8 py-4">
      <PostCard
        post={{
          id: 1,
          title: 'Compound Pattern',
          description:
            'This post is to explain the compound pattern in React and how can we use it',
          author: 'Sandeep ',
        }}
      />
      <PostCardContainer
        post={{
          id: 1,
          title: 'Compound Pattern',
          description:
            'This post is to explain the compound pattern in React and how can we use it',
          author: 'Sandeep ',
        }}
      >
        <PostCardContainer.Author />
        <PostCardContainer.Title />
        <PostCardContainer.Description />
      </PostCardContainer>
    </div>
  );
}
