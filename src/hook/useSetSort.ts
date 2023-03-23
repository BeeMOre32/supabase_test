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
    console.log(data);
    return data.sort((a, b) => b.like - a.like);
  };

  const reVerseDate = (data: getAllPostType[]) => {
    return data.reverse();
  };

  useEffect(() => {
    let newData = [...data];

    if (sortBy === 'favorite') sortByLike(newData);
    if (sortBy === 'date_range') sortByDate(newData);
    if (reverse) reVerseDate(newData);

    setSortedData(newData);
  }, [sortBy, reverse]);

  return sortedData;
}
