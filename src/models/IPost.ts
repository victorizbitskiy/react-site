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

export interface PostsRequestsParams {
  page?: number,
  titleLike?: string
}