export interface ResponseError {
  result: [];
  errors: Array<{
    message: string;
    code: number;
  }>;
}

export interface PostResponseType {
  userId: number;
  id: number;
  title: string;
  body: string;
}
