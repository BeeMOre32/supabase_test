export interface uploadPostType {
  id: number;
  title: string;
  content: string;
}

export interface getAllPostType {
  createdAt: string;
  id: number;
  title: string;
  content: string;
  like: number;
}

export interface EditFormInterface {
  id: number;
  title?: string;
  content?: string;
}

export interface UpdatePostLikeType {
  id: number;
  like: number;
}
