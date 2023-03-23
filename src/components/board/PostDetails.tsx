import { motion } from 'framer-motion';
import { PostDetailInterface } from '../../interface/componentProp';
import dayjs from 'dayjs';

export default function PostDetail({ content }: PostDetailInterface) {
  const date = dayjs(content.id, 'YYYYMMDD').format('MM-DD HH:mm:ss');
  console.log(content);
  return (
    <motion.div className="post-detail" layoutId={content.id.toString()} key={content.id}>
      <div className="post-detail__title">
        <h1>{content.title}</h1>
        <h3>{date}</h3>
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
