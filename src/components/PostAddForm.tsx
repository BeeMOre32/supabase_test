import { SubmitHandler, useForm } from 'react-hook-form';
import { uploadPost } from '../api/api';
import { useMutation } from '@tanstack/react-query';
import { FormInterface } from '../interface/componentProp';

export default function PostAddForm() {
  const mutation = useMutation(uploadPost);
  const { register, handleSubmit } = useForm<FormInterface>();
  const onSubmit: SubmitHandler<FormInterface> = async (data) => {
    const id = new Date().getTime();
    const uploader = { title: data.title, content: data.content, id };

    mutation.mutate(uploader);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" placeholder="title" {...register('title')} />
      <input type="text" placeholder="content" {...register('content')} />
      {mutation.isLoading && <p>Loading...</p>}
      {mutation.isError && <p>Error</p>}
      {mutation.isSuccess && <p>Success</p>}
      <button type="submit">Add Post</button>
    </form>
  );
}
