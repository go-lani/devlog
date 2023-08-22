import React, { Dispatch, SetStateAction } from 'react';
import Category from './Category';

interface Props {
  categories: string[];
  selectedCategory: string;
  setSelectedCategory: Dispatch<SetStateAction<string>>;
}

export default function Categories({
  categories,
  selectedCategory,
  setSelectedCategory,
}: Props) {
  return (
    <div className="flex flex-col items-center justify-center">
      <ul className="mt-5 flex gap-4">
        {categories.map((category) => (
          <li key={category}>
            <Category
              category={category}
              isSelected={selectedCategory === category}
              setSelectedCategory={setSelectedCategory}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
