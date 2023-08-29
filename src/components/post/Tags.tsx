type Props = {
  tags: string[];
};

export default function Tags({ tags }: Props) {
  const categories = [...tags];
  const displayCategories = categories.splice(0, 3);
  return (
    <div className="border-style mx-[-1rem] border-t p-4 text-sm">
      <p className="font-bold text-white">tags</p>
      <ul className="mt-2 flex flex-wrap gap-2">
        {displayCategories.map((category) => (
          <li key={category} className="text-neutral-400">
            {category}
          </li>
        ))}
        {categories.length > 0 && (
          <li className="text-neutral-400">외 {categories.length}</li>
        )}
      </ul>
    </div>
  );
}
