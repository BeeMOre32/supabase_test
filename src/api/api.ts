import { supabase } from './apiKey';
import { EditFormInterface, getAllPostType, UpdatePostLikeType, uploadPostType } from '../interface/apiInterface';

export async function getAllPost() {
  const { data } = await supabase.from('board').select('*');
  return data as getAllPostType[];
}

export async function uploadPost(post: uploadPostType) {
  const { data } = await supabase.from('board').insert({
    id: post.id,
    title: post.title,
    content: post.content,
  });
  return data;
}

export async function upDatePost(post: EditFormInterface) {
  const { data } = await supabase
    .from('board')
    .update({
      title: post.title,
      content: post.content,
    })
    .eq('id', post.id);
  return data;
}

export async function deletePost(id: number) {
  const { data } = await supabase.from('board').delete().eq('id', id);
  return data;
}

export async function upDatePostLike({ like, id }: UpdatePostLikeType) {
  const { data } = await supabase
    .from('board')
    .update({
      like: like,
    })
    .eq('id', id);
  return data;
}
