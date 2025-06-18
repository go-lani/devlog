import crypto from 'crypto';
import fs from 'fs';
import path from 'path';

import { Node, Parent } from 'unist';
import { visit } from 'unist-util-visit';

type Image = {
  type: string;
  url: string;
  alt: string;
};

// 허용된 이미지 확장자와 MIME 타입 매핑
const ALLOWED_EXTENSIONS = {
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.png': 'image/png',
  '.gif': 'image/gif',
  '.webp': 'image/webp',
  '.svg': 'image/svg+xml',
};

// 최대 파일 크기 (5MB)
const MAX_FILE_SIZE = 5 * 1024 * 1024;

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

      try {
        // 경로 정규화 및 검증
        const normalizedPath = path.normalize(image.url.replace('./', ''));

        // 경로 순회 공격 방지
        if (normalizedPath.includes('..') || normalizedPath.startsWith('/')) {
          console.warn(`잘못된 이미지 경로: ${image.url}`);
          return;
        }

        const PATH = path.join(process.cwd(), BASE_PATH);
        const imageUrl = path.join(PATH, normalizedPath);

        // 파일 존재 여부 확인
        if (!fs.existsSync(imageUrl)) {
          console.warn(`이미지 파일을 찾을 수 없음: ${imageUrl}`);
          return;
        }

        // 파일 크기 확인
        const stats = fs.statSync(imageUrl);
        if (stats.size > MAX_FILE_SIZE) {
          console.warn(`파일이 너무 큼: ${imageUrl} (${stats.size} bytes)`);
          return;
        }

        // 파일 확장자 확인
        const ext = path.extname(imageUrl).toLowerCase();
        if (!ALLOWED_EXTENSIONS[ext as keyof typeof ALLOWED_EXTENSIONS]) {
          console.warn(`허용되지 않은 파일 형식: ${ext}`);
          return;
        }

        const imageBuffer = fs.readFileSync(imageUrl);
        const base64String = imageBuffer.toString('base64');

        // 파일명에서 민감한 정보 제거 (해시 사용)
        const fileHash = crypto
          .createHash('md5')
          .update(imageBuffer.toString('binary'))
          .digest('hex')
          .slice(0, 8);
        const safeFileName = `img_${fileHash}`;

        // 올바른 MIME 타입 사용
        const mimeType =
          ALLOWED_EXTENSIONS[ext as keyof typeof ALLOWED_EXTENSIONS];

        image.url = `data:${mimeType};base64,${base64String}`;
      } catch (error) {
        console.error(`이미지 처리 중 오류 발생: ${image.url}`, error);
        // 오류 발생 시 원본 URL 유지하거나 기본 이미지로 대체
      }
    });
  };
}
