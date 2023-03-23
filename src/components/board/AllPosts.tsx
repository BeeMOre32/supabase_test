import { getAllPostType } from '../../interface/apiInterface';
import { getAllPost } from '../../api/api';
import { useQuery } from '@tanstack/react-query';
import PostBoard from './PostBoard';
import { useState, useEffect } from 'react';
import classNames from 'classnames';
import BoardHead from './BoardHead';
import { useRecoilValue } from 'recoil';
import { isReverse } from '../../atom/atom';
import useSortedByState from '../../hook/useSetSort';

export default function AllPosts() {
  const { data, isLoading, isError } = useQuery<getAllPostType[]>(['allPost'], getAllPost, {});
  data?.sort((a, b) => a.id - b.id);

  const isReverseState = useRecoilValue(isReverse);
  const [dataState, setDataState] = useState<getAllPostType[]>([]);
  const sortedData = useSortedByState(dataState, isReverseState);

  useEffect(() => {
    setDataState(sortedData);
  }, [sortedData]);

  useEffect(() => {
    if (!isLoading) setDataState(data!);
  }, [isLoading]);

  return (
    <>
      <BoardHead />
      <div className={classNames('board__wrapper', `item__3`)}>
        {isLoading && <p>Loading...</p>}
        {isError && <p>Error</p>}
        {dataState.length === 0 && <h1 className="board__error">Oops! There is no post</h1>}
        {dataState.map((post) => (
          <PostBoard key={post.id} content={post} />
        ))}
      </div>
    </>
  );
}
