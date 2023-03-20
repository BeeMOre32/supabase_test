import { ButtonInterface } from '../interface/componentProp';
import { useMutation } from '@tanstack/react-query';
import { deletePost } from '../api/api';

export function Button({ content, option }: ButtonInterface) {
  const mutation = useMutation(deletePost);

  const onClick = () => {
    mutation.mutate(option?.id as number);
  };
  return <button onClick={onClick}>{content}</button>;
}
