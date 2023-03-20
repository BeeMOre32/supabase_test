import { getAllPostType } from '../interface/apiInterface';
import { getAllPost } from '../api/api';
import { useQuery } from '@tanstack/react-query';

import { Button } from './Button';
import PostBoard from './PostBoard';

export default function AllPosts() {
  const { data, isLoading, isError } = useQuery<getAllPostType[]>(['allPost'], getAllPost, {});

  return (
    <div className="board__wrapper">
      {isLoading && <p>Loading...</p>}
      {isError && <p>Error</p>}
      {data?.map((post) => {
        return <PostBoard key={post.id} content={post} />;
      })}
    </div>
  );
}
