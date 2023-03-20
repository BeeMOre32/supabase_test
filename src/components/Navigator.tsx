import React, { useState } from 'react';
import { AnimatePresence, motion, Variants } from 'framer-motion';
import '../style/navigator.scss';
import PostAddForm from './PostAddForm';

const variants: Variants = {
  addClicked: {
    rotate: 90,
    transition: {
      duration: 0.2,
    },
  },
};

function Navigator() {
  const [clicked, setClicked] = useState(false);
  const [addFormActive, setAddFormActive] = useState(false);
  return (
    <>
      <div className="navigator__wrapper">
        <div className="navigator__icon">
          <motion.span
            className="material-symbols-outlined"
            animate={clicked ? 'addClicked' : 'add'}
            variants={variants}
            onClick={() => setClicked((prev) => !prev)}
          >
            add
          </motion.span>
        </div>
      </div>
      <AnimatePresence>
        {clicked ? (
          <motion.div initial="" className="navigator__layout">
            <div onClick={() => setAddFormActive((prev) => !prev)}>
              Add Post
              <span className="material-symbols-outlined">post_add</span>
            </div>
            <div>
              <span className="material-symbols-outlined">vertical_align_bottom</span>
            </div>
          </motion.div>
        ) : null}
        {addFormActive ? <PostAddForm /> : null}
      </AnimatePresence>
    </>
  );
}

export default Navigator;
