import { getAllPostType } from '../interface/apiInterface';
import { getAllPost } from '../api/api';
import { useQuery } from '@tanstack/react-query';
import PostBoard from './PostBoard';
import { useState } from 'react';
import classNames from 'classnames';

export default function AllPosts() {
  const { data, isLoading, isError } = useQuery<getAllPostType[]>(['allPost'], getAllPost, {});

  const [sort, setSort] = useState<2 | 3 | 4>(2);

  return (
    <div className={classNames('board__wrapper', `item__${sort}`)}>
      <button onClick={() => setSort(2)}>2</button>
      <button onClick={() => setSort(3)}>3</button>
      <button onClick={() => setSort(4)}>4</button>
      {isLoading && <p>Loading...</p>}
      {isError && <p>Error</p>}
      {data?.map((post) => (
        <PostBoard key={post.id} content={post} />
      ))}
    </div>
  );
}
