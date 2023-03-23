import { useState, useEffect } from 'react';
import { useRecoilValue } from 'recoil';
import { sortByState } from '../atom/atom';
import { getAllPostType } from '../interface/apiInterface';

export default function useSortedByState(data: getAllPostType[] | undefined, reverse: boolean) {
  const sortBy = useRecoilValue(sortByState);
  const [sortedData, setSortedData] = useState<getAllPostType[]>([]);

  if (!data) return sortedData;

  const sortByDate = (data: getAllPostType[]) => {
    return data.sort((a, b) => a.id - b.id);
  };

  const sortByLike = (data: getAllPostType[]) => {
    return data.sort((a, b) => a.like - b.like);
  };

  useEffect(() => {
    let newData = [...data];

    if (sortBy === 'date') sortByDate(newData);
    if (sortBy === 'like') sortByLike(newData);
    if (reverse) newData = [...newData].reverse();

    setSortedData(newData);
  }, [sortBy, reverse]);

  return sortedData;
}
