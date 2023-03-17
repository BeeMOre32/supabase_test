import { getAllPostType } from '../interface/apiInterface';
import { getAllPost } from '../api/api';
import { useQuery } from '@tanstack/react-query';

import { Button } from './Button';

export default function AllPosts() {
  const { data, isLoading, isError } = useQuery<getAllPostType[]>(['allPost'], getAllPost, {});

  return (
    <div className="board__wrapper">
      {isLoading && <p>Loading...</p>}
      {isError && <p>Error</p>}
      {data?.map((post) => {
        return (
          <div key={post.id} className="board__item">
            <h3>{post.title}</h3>
            <p>{post.content}</p>
            <Button content="Edit" option={{ id: post.id }} />
            <Button content="Delete" option={{ id: post.id }} />
          </div>
        );
      })}
    </div>
  );
}
