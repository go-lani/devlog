export type Meta = {
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
  content: string;
};

export type PostDetail = Post & {
  next: Post | null;
  prev: Post | null;
};
