import { getAllPostType } from '../interface/apiInterface';
import { getAllPost } from '../api/api';
import { useQuery } from '@tanstack/react-query';
import PostBoard from './PostBoard';

export default function AllPosts() {
  const { data, isLoading, isError } = useQuery<getAllPostType[]>(['allPost'], getAllPost, {});

  return (
    <div className="board__wrapper">
      {isLoading && <p>Loading...</p>}
      {isError && <p>Error</p>}
      {data?.map((post) => (
        <PostBoard key={post.id} content={post} />
      ))}
    </div>
  );
}
