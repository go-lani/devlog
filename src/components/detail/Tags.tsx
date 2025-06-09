type Props = {
  tags: string[];
};

export default function Tags({ tags }: Props) {
  const copiedtags = [...tags];
  const displaytags = copiedtags.splice(0, 3);
  return (
    <div className="border-style mx-[-1rem] border-t p-4 text-sm">
      <p className="font-bold text-app-white">tags</p>
      <ul className="mt-2 flex flex-wrap gap-2">
        {displaytags.map((tag) => (
          <li key={tag} className="text-neutral-400">
            {tag}
          </li>
        ))}
        {copiedtags.length > 0 && (
          <li className="text-neutral-400">외 {copiedtags.length}</li>
        )}
      </ul>
    </div>
  );
}
