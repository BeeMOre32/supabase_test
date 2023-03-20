import { motion, Variants } from 'framer-motion';
import { PostDetailInterface } from '../interface/componentProp';

const variants: Variants = {};

export default function PostDetail({ content }: PostDetailInterface) {
  return (
    <motion.div className="post-detail" layoutId={content.id.toString()} key={content.id}>
      <h1>{content.title}</h1>
      <p>{content.content}</p>
    </motion.div>
  );
}
