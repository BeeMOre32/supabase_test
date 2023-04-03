import { motion } from 'framer-motion';
import { PostDetailInterface } from '../../interface/componentProp';
import dayjs from 'dayjs';
import { Button } from '../Button';

export default function PostDetail({ content, onClose }: PostDetailInterface) {
  const date = dayjs(content.id, 'YYYYMMDD').format('MM-DD HH:mm:ss');

  return (
    <motion.div className="post-detail" layoutId={content.id.toString()} key={content.id}>
      <div className="post-detail__title">
        <h1>{content.title}</h1>
        <div className="post-detail__sub">
          <h3>{date}</h3>
          <Button
            content={'close'}
            state={{ type: 'button', className: 'material-symbols-outlined btn__close' }}
            onClick={onClose}
          />
        </div>
      </div>
      <div className="post-detail__content">
        <p>{content.content}</p>
        <p>
          {content.like}
          <span className="material-symbols-outlined">favorite</span>
        </p>
      </div>
    </motion.div>
  );
}
