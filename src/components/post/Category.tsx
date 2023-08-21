import React, { Dispatch, SetStateAction } from 'react';

interface Props {
  category: string;
  isSelected: boolean;
  setSelectedCategory: Dispatch<SetStateAction<string>>;
}

export default function Category({
  category,
  isSelected,
  setSelectedCategory,
}: Props) {
  return (
    <button
      type="button"
      className={`${isSelected && 'text-blue-500'} text-xl`}
      onClick={() => {
        setSelectedCategory(category);
      }}
    >
      {category}
    </button>
  );
}
