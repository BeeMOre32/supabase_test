import React from 'react';
import { useRecoilState } from 'recoil';
import { isReverse, sortByState } from '../../atom/atom';
import classNames from 'classnames';
import { motion } from 'framer-motion';
import { SortBy } from '../../api/atomInterface';

function BoardHead() {
  const [reverse, handleReverse] = useRecoilState(isReverse);
  const [sortState, handleSortBy] = useRecoilState(sortByState);

  const handleSortDirect = () => {
    handleReverse((prev) => !prev);
  };
  const typeArray: SortBy[] = ['favorite', 'date_range'];
  const setSortBy = (type: SortBy) => {
    handleSortBy(type);
  };

  return (
    <div className="board__head">
      {typeArray.map((type) => (
        <span key={type} onClick={() => setSortBy(type)} className="material-symbols-outlined board__icon">
          {type}
          {sortState === type && <motion.span layoutId="highlight" className="highlight sort"></motion.span>}
        </span>
      ))}

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
