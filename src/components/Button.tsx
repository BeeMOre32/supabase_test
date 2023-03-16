import { ButtonInterface } from '../interface/componentProp';
import { useMutation } from '@tanstack/react-query';
import { deletePost } from '../api/api';

export function Button({ content, option }: ButtonInterface) {
  const mutation = useMutation(deletePost);

  const onClick = () => {
    // @ts-ignore
    mutation.mutate(option?.id);
  };
  return <button onClick={onClick}>{content}</button>;
}
