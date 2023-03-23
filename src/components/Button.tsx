import { ButtonInterface } from '../interface/componentProp';
import useBtnClass from '../hook/useBtnClass';
import classNames from 'classnames';
import { motion, Variants } from 'framer-motion';

const variants: Variants = {
  error: {
    translateX: [100, 0, -100, 0],
    transition: {
      duration: 0.1,
      repeat: 2,
    },
  },
  initial: {
    translateX: 0,
  },
};

export function Button({ content, state, onClick, isError }: ButtonInterface) {
  const { btnType, btnClassName } = useBtnClass(state);

  return (
    <motion.button
      type={btnType}
      animate={isError ? 'error' : 'initial'}
      variants={variants}
      onClick={onClick}
      className={classNames(btnType + '__btn', btnClassName)}
    >
      {content}
    </motion.button>
  );
}
