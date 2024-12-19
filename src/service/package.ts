import { readFileSync } from 'fs';
import path from 'path';

import matter from 'gray-matter';
import { cache } from 'react';

import { serializeMDX } from '@/utils/serialize';

export const getPackage = cache(async (name: string) => {
  const filePath = path.join(process.cwd(), 'packages', `${name}.mdx`);

  const file = readFileSync(filePath, 'utf-8');
  const { content } = matter(file);
  const serialized = await serializeMDX({ content, category: 'packages' });

  return serialized;
});
