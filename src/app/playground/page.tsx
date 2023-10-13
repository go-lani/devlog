'use client';

import { Modal } from '@lani.ground/react-modal';

export default function App() {
  return (
    <>
      <main className="flex flex-col text-white">
        <h1>playground</h1>
        <Modal
          trigger={<button type="button">Click Me!</button>}
          component={(closeModal) => (
            <div>
              Hello react-modal
              <button
                type="button"
                onClick={() => {
                  closeModal();
                }}
              >
                close
              </button>
            </div>
          )}
        />
      </main>
    </>
  );
}
