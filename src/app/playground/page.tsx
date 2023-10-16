'use client';

import { Modal } from '@lani.ground/react-modal';

function PopupInPopup() {
  return (
    <Modal
      name="popup-in-popup"
      direct
      dim="rgba(0,0,0,0.8)"
      trigger={<button type="button">Click Me!</button>}
      onAfterClose={() => {
        console.log('callback');
      }}
      component={(closeModal) => <div className="bg-white">hihi</div>}
    />
  );
}

function Popup(closeModal: () => Promise<void>) {
  return (
    <div className="absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]">
      <button
        className="absolute bottom-[100%] left-0 right-0 text-white"
        type="button"
        onClick={closeModal}
      >
        Close Modal
      </button>
      <div className="h-[400px] w-[400px] overflow-y-auto bg-gray-400 p-4">
        <p>
          {/* <PopupInPopup /> */}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Elementum
          sagittis vitae et leo duis. Non consectetur a erat nam. Sit amet
          consectetur adipiscing elit duis tristique sollicitudin nibh sit.
          Tellus in hac habitasse platea dictumst vestibulum. Vel turpis nunc
          eget lorem dolor sed viverra. Nisl rhoncus mattis rhoncus urna neque
          viverra justo. Viverra aliquet eget sit amet tellus cras adipiscing
          enim. Pharetra diam sit amet nisl suscipit adipiscing bibendum. In hac
          habitasse platea dictumst vestibulum rhoncus. Ante in nibh mauris
          cursus mattis molestie a iaculis at. Sed lectus vestibulum mattis
          ullamcorper. Faucibus a pellentesque sit amet porttitor. Habitasse
          platea dictumst vestibulum rhoncus. Hac habitasse platea dictumst
          quisque sagittis purus sit. Molestie at elementum eu facilisis sed.
          Montes nascetur ridiculus mus mauris. Tellus pellentesque eu tincidunt
          tortor aliquam. Massa id neque aliquam vestibulum morbi. Est velit
          egestas dui id. Elit ullamcorper dignissim cras tincidunt lobortis
          feugiat. At risus viverra adipiscing at. Ullamcorper malesuada proin
          libero nunc consequat interdum varius sit. Ac felis donec et odio
          pellentesque diam volutpat. Sit amet venenatis urna cursus eget nunc
          scelerisque. Potenti nullam ac tortor vitae purus faucibus ornare
          suspendisse. Consectetur adipiscing elit pellentesque habitant morbi
          tristique senectus. Nisl tincidunt eget nullam non nisi est. Orci
          porta non pulvinar neque laoreet suspendisse interdum. Sed augue lacus
          viverra vitae congue eu consequat. Magna eget est lorem ipsum dolor
          sit amet consectetur. Porta lorem mollis aliquam ut porttitor leo a
          diam sollicitudin. Arcu cursus vitae congue mauris rhoncus aenean vel.
          Sollicitudin aliquam ultrices sagittis orci a scelerisque purus.
          Lectus mauris ultrices eros in cursus. Sodales ut eu sem integer vitae
          justo eget magna. Ut porttitor leo a diam sollicitudin tempor id.
          Dolor sit amet consectetur adipiscing elit ut aliquam purus. Elit eget
          gravida cum sociis natoque penatibus. Est velit egestas dui id ornare
          arcu odio. Ut tortor pretium viverra suspendisse potenti nullam ac.
          Tristique senectus et netus et malesuada fames. Quis vel eros donec ac
          odio tempor. Odio tempor orci dapibus ultrices in iaculis nunc. Et
          tortor consequat id porta nibh venenatis cras. Feugiat pretium nibh
          ipsum consequat nisl vel pretium lectus quam. Ullamcorper sit amet
          risus nullam eget felis eget nunc. In massa tempor nec feugiat nisl
          pretium fusce id velit. Mattis aliquam faucibus purus in massa tempor
          nec feugiat. Pellentesque id nibh tortor id aliquet lectus proin nibh
          nisl.
        </p>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <>
      <main className="flex flex-col text-white">
        <h1>playground</h1>
        <section className="h-[50vh] bg-orange-300 p-8">
          <p>section 1</p>
          <Modal
            name="intro"
            dim="rgba(0,0,0,0.8)"
            trigger={<button type="button">Click Me!</button>}
            onAfterClose={() => {
              console.log('callback');
            }}
            component={Popup}
            direct
          />
        </section>
        <section className="h-[50vh] bg-emerald-600 p-8">section 2</section>
        <section className="h-[50vh] bg-violet-700 p-8">
          <p>section 3</p>

          <Modal
            name="intro2"
            dim="rgba(0,0,0,0.8)"
            trigger={<button type="button">Click Me!</button>}
            onAfterClose={() => {
              console.log('callback');
            }}
            component={Popup}
          />
        </section>
        <section className="h-[50vh] bg-pink-700 p-8">section 4</section>
      </main>
    </>
  );
}
