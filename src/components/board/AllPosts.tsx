import { getAllPostType } from '../../interface/apiInterface';
import { getAllPost } from '../../api/api';
import { useQuery } from '@tanstack/react-query';
import { useState, useEffect } from 'react';
import classNames from 'classnames';
import BoardHead from './BoardHead';

import useSortedByState from '../../hook/useSetSort';
import AllBoards from './AllBoards';

export default function AllPosts() {
  const { data, isLoading, isError, isFetching } = useQuery<getAllPostType[]>(['allPosts'], getAllPost, {});
  data?.sort((a, b) => a.id - b.id);

  const [dataState, setDataState] = useState<getAllPostType[]>([]);
  const sortedData = useSortedByState(dataState);

  useEffect(() => {
    setDataState(sortedData);
  }, [sortedData]);

  useEffect(() => {
    if (!data) return;
    setDataState(data);
  }, [isFetching]);

  if (isLoading) return <h1>Loading...</h1>;
  if (isError) return <h1>Oops! Something went wrong</h1>;

  return (
    <>
      <BoardHead />
      <div className={classNames('board__wrapper', `item__3`)}>
        {dataState.length === 0 && <h1 className="board__error">Oops! There is no post</h1>}
        <AllBoards board={dataState} />
      </div>
    </>
  );
}
