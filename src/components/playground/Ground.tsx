'use client';

import { Modal } from '@lani.ground/react-modal';
import { OutsideClickHandler } from '@lani.ground/react-outside-click-handler';
import '@lani.ground/react-modal/css';
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

        <Modal
          trigger={<button type="button">hihi</button>}
          component={(closeModal) => (
            <div style={{ color: '#fff', background: 'blue' }}>
              <button type="button" onClick={closeModal}>
                X
              </button>
              <Modal
                name="modal2"
                trigger={<button type="button">모달 2</button>}
                component={(closeModal) => (
                  <div style={{ background: 'red' }}>
                    <button type="button" onClick={closeModal}>
                      XX
                    </button>
                    <p>모달2</p>
                  </div>
                )}
                dim="rgba(0,0,0,.8)"
              />
              <p>모달</p>
            </div>
          )}
        />

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
