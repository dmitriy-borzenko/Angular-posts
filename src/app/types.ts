export interface User {
  email: string;
  password: string;
}

export interface Post {
  userId: string;
  id: string;
  title: string,
  body: string;
}

export interface CustomParams {
 start?: number;
 limit?: number;
}