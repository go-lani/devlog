import fs from 'fs';
import path from 'path';
import { visit } from 'unist-util-visit';
import { Node, Parent } from 'unist';

type Image = {
  type: string;
  url: string;
  alt: string;
};

export default function transformImgSrc(category: 'posts' | 'packages') {
  return (tree: Node) => {
    const BASE_PATH = `./${category}`;

    visit(tree, 'paragraph', (node: Parent) => {
      const image = node.children.find(
        (child) => child.type === 'image',
      ) as Image;

      if (!image) return;

      const isExternalImage =
        image.url.startsWith('http://') || image.url.startsWith('https://');

      if (isExternalImage) return;

      const PATH = path.join(process.cwd(), BASE_PATH);
      const fileRoute = image.url.replace('./', '');
      const imageUrl = `${PATH}/${fileRoute}`;
      const imageBuffer = fs.readFileSync(imageUrl);
      const base64String = imageBuffer.toString('base64');
      const fileName = path
        .basename(image.url)
        .replace(path.extname(fileRoute), '');

      image.url = `data:image/${fileName};base64,${base64String}`;
    });
  };
}
