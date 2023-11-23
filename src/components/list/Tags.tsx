import React, { Dispatch, SetStateAction } from 'react';

interface Props {
  selectedTag: string;
  setSelectedTag: Dispatch<SetStateAction<string>>;
  tags: string[];
}

export default function Tags({ tags, selectedTag, setSelectedTag }: Props) {
  return (
    <div className="flex flex-col justify-center p-4 md:p-5">
      <ul className="flex flex-wrap gap-x-4 gap-y-0 md:gap-5">
        {tags.map((tag) => (
          <li key={tag} className="shrink-0">
            <button
              type="button"
              className={`text-xs md:text-sm ${
                selectedTag === tag
                  ? 'font-bold text-app-blue-green'
                  : 'text-app-white'
              }`}
              onClick={() => {
                setSelectedTag(tag);
              }}
            >
              {tag}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
