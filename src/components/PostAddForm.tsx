import { SubmitHandler, useForm } from 'react-hook-form';
import { uploadPost } from '../api/api';
import { useMutation } from '@tanstack/react-query';
import { FormInterface } from '../interface/componentProp';
import '../style/addForm.scss';
import classNames from 'classnames';
import { motion } from 'framer-motion';
export default function PostAddForm() {
  const mutation = useMutation(uploadPost);
  const { register, handleSubmit } = useForm<FormInterface>();
  const onSubmit: SubmitHandler<FormInterface> = async (data) => {
    const id = new Date().getTime();
    const uploader = { title: data.title, content: data.content, id };

    mutation.mutate(uploader);
  };

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 100,
        scale: 0.5,
      }}
      animate={{
        opacity: 1,
        y: 0,
        scale: 1,
      }}
      exit={{
        opacity: 0,
        y: 100,
        scale: 0.5,
      }}
      className="form__add"
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="text" className="form__title" placeholder="title" {...register('title')} />
        <input type="text" className="form__content" placeholder="content" {...register('content')} />
        <button
          type="submit"
          className={classNames(
            'form__button',
            mutation.isLoading ? 'form__button--loading' : '',
            mutation.isSuccess ? 'form__button--success' : '',
            mutation.isError ? 'form__button--error' : ''
          )}
        >
          {mutation.isLoading ? 'loading' : mutation.isSuccess ? 'success' : mutation.isError ? 'error' : 'submit'}
        </button>
      </form>
    </motion.div>
  );
}
