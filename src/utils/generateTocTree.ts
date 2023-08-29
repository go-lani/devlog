import { remark } from 'remark';
import remarkToc from 'remark-toc';
import { toKebabCase } from './string';

export type Toc = {
  level: number;
  title: string;
  href: string;
  children?: Toc[];
};

export const getHeadingTree = async (content: string): Promise<Toc[]> => {
  const headings: Toc[] = [];

  await remark()
    .use(remarkToc)
    .use(() => extractHeadings(headings))
    .process(content);

  return headings;
};

const extractHeadings = (headings: Toc[]) => (tree: { children: any[] }) => {
  tree.children.forEach((node) => {
    if (node.type === 'heading' && node.children[0]?.value) {
      headings.push({
        level: node.depth,
        title: node.children[0].value,
        href: `#${toKebabCase(node.children[0].value)}`,
      });
    }
  });
};

export const generateTocTree = (headings: Toc[]): Toc[] => {
  const tocLevels: { [key: number]: Toc } = {};

  return headings.reduce((toc: Toc[], heading: Toc) => {
    const newHeading: Toc = { ...heading };
    tocLevels[heading.level] = newHeading;

    if (heading.level === 2) {
      toc.push(newHeading);
    } else {
      const parent = tocLevels[heading.level - 1];
      if (parent) {
        parent.children = parent.children || [];
        parent.children.push(newHeading);
      }
    }

    return toc;
  }, []);
};
