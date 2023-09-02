export const toKebabCase = (str: string): string => {
  return str
    .toLowerCase()
    .replace(/[\s_]+/g, '-')
    .replace(/([a-z])([A-Z])/g, '$1-$2')
    .replace(/[^a-z0-9가-힣-]+/g, '')
    .replace(/--+/g, '-')
    .replace(/^-+|-+$/g, '');
};
