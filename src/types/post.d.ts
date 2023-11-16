export type Meta = {
  type: string;
  title: string;
  description: string;
  date: string;
  tags: string[];
  path: string;
  featured: boolean;
  series?: string;
  series_number?: string;
  thumbnail: string;
  wordCount: number;
  readingMinutes: number;
};

export type Post = {
  meta: Meta;
  toc: Toc[];
  content: MDXRemoteSerializeResult;
};

export type PostDetail = Post & {
  next: Post | null;
  prev: Post | null;
};
