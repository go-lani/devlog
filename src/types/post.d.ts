export type Meta = {
  title: string;
  description: string;
  date: string;
  category: string;
  path: string;
  featured: boolean;
  series?: string;
  thumbnail: string;
};

export type Post = {
  meta: Meta;
  content: string;
};

export type PostDetail = Post & {
  next: Post | null;
  prev: Post | null;
};
