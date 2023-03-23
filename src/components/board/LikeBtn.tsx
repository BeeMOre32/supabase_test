import { motion } from 'framer-motion';
import React from 'react';
import { LikeBtnInterface } from '../../interface/componentProp';
import { useMutation } from '@tanstack/react-query';
import { upDatePostLike } from '../../api/api';

const variants = {
  isLoading: {
    opacity: 0,
    scale: 0.5,
  },
  isSuccess: {
    opacity: 1,
  },
  isSuccessIcon: {
    opacity: 1,
    scale: 1.1,
  },
};

function LikeBtn({ like, id }: LikeBtnInterface) {
  const { mutate, isLoading, isSuccess } = useMutation(upDatePostLike);
  const onLikeBtnClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    mutate({ id, like: like + 1 });
  };

  return (
    <motion.button
      animate={isLoading ? 'isLoading' : '' || isSuccess ? 'isSuccess' : ''}
      variants={variants}
      onClick={onLikeBtnClick}
      className="like__btn"
    >
      {like}
      <motion.span animate={isSuccess ? '' : ''} className="material-symbols-outlined">
        favorite
      </motion.span>
    </motion.button>
  );
}

export default LikeBtn;
