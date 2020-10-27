import React from 'react';

const RemotePosts = React.lazy(() => import('posts_react/App'));

console.log(RemotePosts);

const Posts = () => (
  <React.Suspense fallback="Loading posts...">
    <RemotePosts />
  </React.Suspense>
);

export default Posts;
