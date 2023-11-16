import { serialize } from 'next-mdx-remote/serialize';
import remarkCodeTitle from 'remark-code-title';
import remarkGfm from 'remark-gfm';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import transformImgSrc from './transformImgSrc';

export async function serializeMDX({
  content,
  category = 'posts',
}: {
  content: string;
  category: 'posts' | 'packages';
}) {
  const result = await serialize(content, {
    scope: {},
    mdxOptions: {
      remarkPlugins: [
        remarkGfm,
        remarkCodeTitle,
        () => transformImgSrc(category),
      ],
      rehypePlugins: [rehypeSlug, rehypeAutolinkHeadings],
      format: 'mdx',
    },
    parseFrontmatter: false,
  });
  return result;
}
