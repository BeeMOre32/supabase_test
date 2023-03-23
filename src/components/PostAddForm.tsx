import { SubmitErrorHandler, SubmitHandler, useForm } from 'react-hook-form';
import { uploadPost } from '../api/api';
import { useMutation } from '@tanstack/react-query';
import { FormInterface } from '../interface/componentProp';
import '../style/addForm.scss';
import classNames from 'classnames';
import { motion, Variants } from 'framer-motion';
import { Button } from './Button';
import { useSetRecoilState } from 'recoil';
import { formActive } from '../atom/atom';
import { useState } from 'react';

const variants: Variants = {
  initial: {
    opacity: 0,
    y: 100,
    scale: 0.5,
  },
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
  },
  exit: {
    opacity: 0,
    y: 100,
    scale: 0.5,
  },
};

export default function PostAddForm() {
  const [isError, setIsError] = useState(false);
  const { mutate, isSuccess, isLoading } = useMutation(uploadPost);
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm<FormInterface>();
  const setFormActive = useSetRecoilState(formActive);
  const onSubmit: SubmitHandler<FormInterface> = async (data) => {
    const id = new Date().getTime();
    const uploader = { title: data.title, content: data.content, id };

    mutate(uploader);
    setFormActive(false);
  };

  const onError: SubmitErrorHandler<FormInterface> = () => {
    setIsError(false);

    setTimeout(() => {
      setIsError(true);
    });
  };

  const errorMessages = Object.values(errors).map((error) => error.message);

  const submitBtnContent = isLoading ? 'loading' : isSuccess ? 'success' : 'submit';

  return (
    <motion.div initial="initial" animate="animate" exit="exit" variants={variants} className="form__add">
      <form onSubmit={handleSubmit(onSubmit, onError)}>
        <input
          type="text"
          className="form__title"
          placeholder="title"
          {...register('title', {
            required: "title can't be empty",
          })}
        />
        <input
          type="text"
          className="form__content"
          placeholder="content"
          {...register('content', {
            required: "content can't be empty",
          })}
        />
        <Button
          content={errorMessages[0] || errorMessages[1] || submitBtnContent}
          isError={isError}
          state={{
            type: 'submit',
            className: classNames({
              loading: isLoading,
              success: isSuccess,
              error: isError,
            }),
          }}
        />
        <Button
          content="cancel"
          state={{
            type: 'button',
            className: 'warning',
          }}
          onClick={() => setFormActive(false)}
        />
      </form>
    </motion.div>
  );
}
