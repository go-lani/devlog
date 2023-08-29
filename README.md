lani의 개발 블로그

## Base 스택

- [x] Next@13.4.18(App route)
- [x] Typescript
- [x] Tailwindcss
- [x] ESLint
- [x] Prettier
- [x] Husky
- [x] Lint-staged

## Markdown을 위한 스택

- [x] glob
- [x] gray-matter
- [x] react-markdown
- [x] react-syntax-highlighter

## 규칙

1. /contents 폴더에 md파일을 추가하면 자동으로 라우팅이 됩니다.
2. markdown내부에서 이미지 사용시 ./의 기준은 **/contents** 입니다.
3. thumbnail 이미지는 해당 폴더에 \_thumbnail로 끝나는 파일을 추가하면 자동으로 적용됩니다.(없을 경우 /contents/default_thumbnail.webp가 적용됩니다.)
4. Markdown 작성시 heading-1을 제외하고 작성한다.(heading-1은 자동으로 제목으로 적용됩니다.)
