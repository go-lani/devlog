export const toKebabCase = (str: string): string => {
  return (
    str
      // Convert the string to lowercase
      .toLowerCase()
      // Replace spaces, underscores, and camelCase with hyphen
      .replace(/[\s_]+/g, '-')
      .replace(/([a-z])([A-Z])/g, '$1-$2')
      // Remove all non-word characters (everything except numbers, letters, and hyphens)
      .replace(/[^a-z0-9-]+/g, '')
      // Replace multiple consecutive hyphens with a single one
      .replace(/--+/g, '-')
      // Trim any starting or trailing hyphens
      .replace(/^-+|-+$/g, '')
  );
};
