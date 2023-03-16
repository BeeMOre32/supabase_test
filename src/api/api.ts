import { supabase } from './apiKey';
import { EditFormInterface, getAllPostType, uploadPostType } from '../interface/apiInterface';

export async function getAllPost() {
  const { data, error } = await supabase.from('board').select('*');
  if (error) console.log(error);
  return data as getAllPostType[];
}

export async function uploadPost(post: uploadPostType) {
  const { data, error } = await supabase.from('board').insert({
    id: post.id,
    title: post.title,
    content: post.content,
  });
  if (error) console.log(error);
  return data;
}

export async function upDatePost(post: EditFormInterface) {
  const { data, error } = await supabase
    .from('board')
    .update({
      title: post.title,
      content: post.content,
    })
    .eq('id', post.id);
  if (error) console.log(error);
  return data;
}

export async function deletePost(id: number) {
  const { data, error } = await supabase.from('board').delete().eq('id', id);
  if (error) console.log(error);
  return data;
}
