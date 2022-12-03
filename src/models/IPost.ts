export interface IPost{
  id: number;
  userId: string;
  title: string;
  body: string
}

export interface PostResponse {
  posts: IPost[];
  totalPages: Number;
}