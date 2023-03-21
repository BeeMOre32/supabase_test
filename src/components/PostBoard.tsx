import { AnimatePresence, motion, Variants } from 'framer-motion';
import { PostBoardInterface } from '../interface/componentProp';
import React, { useState } from 'react';
import PostDetail from './PostDetails';

const variants: Variants = {
  hover: {
    translateX: -5,
    translateY: -5,
    boxShadow: '15px 10px 20px 0 rgba(255,255,255,0.45)',
  },
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
  },
  exit: {
    opacity: 0,
  },
};

export default function PostBoard({ content }: PostBoardInterface) {
  const [isActive, setIsActive] = useState<null | number>(null);

  const handleClick = () => {
    setIsActive(content.id);
  };

  const handleClickOutside = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      setIsActive(null);
    }
  };

  return (
    <>
      <motion.div
        key={content.id}
        layoutId={content.id.toString()}
        whileHover="hover"
        whileTap={{ boxShadow: '0px 0px 0px 0 rgba(255,255,255,0.45)' }}
        onClick={handleClick}
        variants={variants}
        className="board__item"
      >
        <h3>{content.title}</h3>
      </motion.div>
      <AnimatePresence>
        {isActive ? (
          <motion.div
            onClick={handleClickOutside}
            key={content.id}
            className="detail__layout"
            initial="initial"
            animate="animate"
            exit="exit"
            variants={variants}
          >
            <PostDetail content={content} />
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
