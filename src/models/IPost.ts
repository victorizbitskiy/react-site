export interface IPost{
  id: number;
  userId: string;
  title: string;
  body: string
}

export interface PostsResponse {
  posts: IPost[];
  totalPages: number;
}

export interface PostsByTitleLikeResponse {
  data: IPost[];
}