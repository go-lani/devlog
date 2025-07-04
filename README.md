Lani의 개발 블로그

## Base 스택

- [x] Next(App Router)
- [x] Typescript
- [x] Tailwindcss
- [x] react-icons
- [x] ESLint
- [x] Prettier
- [x] Husky
- [x] Lint-staged

## Markdown을 위한 스택

- [x] glob
- [x] gray-matter
- [x] @next/mdx
- [x] @mdx-js/loader
- [x] @mdx-js/react
- [x] react-syntax-highlighter

## 규칙

1. /posts 폴더에 md파일을 추가하면 자동으로 라우팅이 됩니다.
2. markdown내부에서 이미지 사용시 ./의 기준은 **/posts** 입니다.
3. thumbnail 이미지는 해당 폴더에 \_thumbnail로 끝나는 파일을 추가하면 자동으로 적용됩니다.(없을 경우 /posts/images/default_thumbnail.webp가 적용됩니다.)
4. Markdown 작성시 heading-1을 제외하고 작성한다.(heading-1은 자동으로 제목으로 적용됩니다.)
5. markdown 메타데이터 정보
   | Key | type | Description | Example |
   | ----------- | ------------ | ----------------------- | ----- |
   | type | string | 포스트 유형(post, snippet) | post |
   | description | string | 포스트 설명 | lani의 개발 블로그 |
   | date | string | 작성일 | yyyy-mm-dd |
   | tags | string | 포스트 관련 tag( ','로 구분) | blog, resume |
   | series | string | 시리즈 물의 경우 시리즈명 | daily |
   | featured | boolean | 게시 여부 | true |
