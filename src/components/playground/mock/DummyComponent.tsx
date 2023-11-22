'use client';

import { Modal } from '@lani.ground/react-modal';
import '@lani.ground/react-modal/css';

export default function DummyComponent({
  closeModal,
}: {
  closeModal: () => Promise<void>;
}) {
  return (
    <div className="sample-modal-inner bg-stone-700 text-white">
      <div className="relative max-w-[500px] p-4">
        <Modal
          name="inner-modal"
          trigger={
            <button
              type="button"
              className="cursor-pointer bg-yellow-800 p-4 text-lg font-bold text-white"
            >
              Click Me!
            </button>
          }
          component={(closeModal) => (
            <div className="text-sienna relative mt-[60px] w-[300px]">
              <button
                type="button"
                onClick={closeModal}
                className="absolute left-[50%] top-[-70px] z-10 h-[70px] w-[70px] translate-x-[-50%] cursor-pointer"
              >
                <img
                  src="/assets/images/icons/close.svg"
                  alt=""
                  className="object-fill"
                />
              </button>
              <div className="max-h-[300px] overflow-y-auto bg-amber-600 px-[20px]">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  interdum eu lectus sit amet elementum. Maecenas dictum
                  imperdiet ipsum, sit amet venenatis turpis rutrum vitae.
                  Aliquam id faucibus tellus. Cras facilisis sed purus eu
                  sagittis. Integer volutpat et enim vitae feugiat. Pellentesque
                  ac dapibus ligula. In a efficitur nibh. Interdum et malesuada
                  fames ac ante ipsum primis in faucibus. Donec pharetra tellus
                  nec malesuada ultrices. Duis quis pellentesque turpis, vel
                  efficitur turpis. Sed viverra iaculis turpis, vitae pulvinar
                  augue elementum sit amet. Pellentesque fermentum lorem et
                  pretium pulvinar. Etiam dictum sit amet tellus vitae commodo.
                </p>
              </div>
            </div>
          )}
          centerMode
          dim="rgba(0,0,0,0.8)"
          animation={{
            duration: 300,
            className: 'sample2',
          }}
        />
        <button
          type="button"
          onClick={closeModal}
          className="absolute right-0 top-0 z-10 h-[70px] w-[70px] cursor-pointer"
        >
          <img
            src="/assets/images/icons/close.svg"
            alt=""
            style={{ objectFit: 'fill' }}
          />
        </button>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut interdum
          eu lectus sit amet elementum. Maecenas dictum imperdiet ipsum, sit
          amet venenatis turpis rutrum vitae. Aliquam id faucibus tellus. Cras
          facilisis sed purus eu sagittis. Integer volutpat et enim vitae
          feugiat. Pellentesque ac dapibus ligula. In a efficitur nibh. Interdum
          et malesuada fames ac ante ipsum primis in faucibus. Donec pharetra
          tellus nec malesuada ultrices. Duis quis pellentesque turpis, vel
          efficitur turpis. Sed viverra iaculis turpis, vitae pulvinar augue
          elementum sit amet. Pellentesque fermentum lorem et pretium pulvinar.
          Etiam dictum sit amet tellus vitae commodo.
        </p>
        <img src="/assets/images/sample/image-10.jpg" alt="" />
      </div>
    </div>
  );
}
