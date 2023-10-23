'use client';

import { OutsideClickHandler } from '@lani.ground/react-outside-click-handler';
// import { OutsideClickHandler } from '@lani.ground/react-outside-click-handler';
import { useState } from 'react';

export default function Ground() {
  const [selectedOption, setSelectedOption] = useState<string>('');
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const OPTIONS = ['option1', 'option2', 'option3'];

  return (
    <>
      <main className="flex flex-col text-white">
        <h1 className="p-20 text-2xl">playground</h1>

        <div className="relative">
          <button type="button" onClick={() => setIsOpen((prev) => !prev)}>
            Click Me
          </button>

          {isOpen && (
            <OutsideClickHandler onOutsideClick={() => setIsOpen(false)}>
              <ul className="absolute left-[20px] top-[100px] bg-gray-500 px-5">
                {OPTIONS.map((option) => (
                  <li key={option}>
                    <button
                      type="button"
                      onClick={() => {
                        setSelectedOption(option);
                        setIsOpen(false);
                      }}
                    >
                      {option}
                    </button>
                  </li>
                ))}
              </ul>
            </OutsideClickHandler>
          )}
        </div>

        <p>
          selected: <strong>{selectedOption}</strong>
        </p>
      </main>
    </>
  );
}
