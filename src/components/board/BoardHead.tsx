import React from 'react';
import { useRecoilState } from 'recoil';
import { isReverse, sortByState } from '../../atom/atom';
import classNames from 'classnames';
import { motion } from 'framer-motion';

function BoardHead() {
  const [reverse, handleReverse] = useRecoilState(isReverse);
  const [sortState, handleSortBy] = useRecoilState(sortByState);

  const handleSortDirect = () => {
    handleReverse((prev) => !prev);
  };

  const setSortBy = (type: 'date' | 'like') => {
    handleSortBy(type);
  };

  return (
    <div className="board__head">
      <motion.span
        layout
        onClick={() => setSortBy('date')}
        className={classNames('material-symbols-outlined', {
          highlight: sortState === 'date',
        })}
      >
        event
      </motion.span>
      <motion.span
        layout
        onClick={() => setSortBy('like')}
        className={classNames('material-symbols-outlined', {
          highlight: sortState === 'like',
        })}
      >
        favorite
      </motion.span>
      <span
        onClick={handleSortDirect}
        className={classNames('material-symbols-outlined', {
          highlight: reverse,
        })}
      >
        sort
      </span>
    </div>
  );
}

export default BoardHead;
