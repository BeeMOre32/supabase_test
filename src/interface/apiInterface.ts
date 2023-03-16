export interface uploadPostType {
  id: number;
  title: string;
  content: string;
}

export interface getAllPostType {
  id: number;
  title: string;
  content: string;
}

export interface EditFormInterface {
  id: number;
  title?: string;
  content?: string;
}
