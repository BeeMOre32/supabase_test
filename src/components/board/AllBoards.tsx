import React from 'react';
import { getAllPostType } from '../../interface/apiInterface';
import PostBoard from './PostBoard';

interface AllBoardsProps {
  board: getAllPostType[];
}

function AllBoards({ board }: AllBoardsProps) {
  return (
    <>
      {board.map((post) => (
        <PostBoard key={post.id} content={post} />
      ))}
    </>
  );
}

export default AllBoards;
