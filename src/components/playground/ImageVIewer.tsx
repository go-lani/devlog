'use client';

import { ImageViewerProvider } from '@lani.ground/react-image-viewer';
import '@lani.ground/react-image-viewer/css';

export default function ImageViewerPage() {
  return (
    <>
      <ImageViewerProvider disableGallery>
        <div className="flex flex-col gap-4 border border-zinc-700 p-4 text-sm md:text-base">
          <p className="bg-zinc-700 p-4 text-2xl font-bold">
            Single Image Viewer
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut interdum
            eu lectus sit amet elementum. Maecenas dictum imperdiet ipsum, sit
            amet venenatis turpis rutrum vitae. Aliquam id faucibus tellus. Cras
            facilisis sed purus eu sagittis. Integer volutpat et enim vitae
            feugiat. Pellentesque ac dapibus ligula. In a efficitur nibh.
            Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec
            pharetra tellus nec malesuada ultrices. Duis quis pellentesque
            turpis, vel efficitur turpis. Sed viverra iaculis turpis, vitae
            pulvinar augue elementum sit amet. Pellentesque fermentum lorem et
            pretium pulvinar. Etiam dictum sit amet tellus vitae commodo.
          </p>
          <img src="/assets/images/sample/image-1.jpg" alt="" />
          <p>
            Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec
            eget diam feugiat nibh dictum dignissim. Morbi eget lorem at mauris
            tristique euismod id suscipit nulla. In eu egestas orci. Nullam
            mattis id nisi quis condimentum. Donec porttitor purus sit amet ante
            eleifend ornare sed id sapien. Nam mattis arcu sit amet iaculis
            blandit. Proin mattis velit eu massa semper efficitur. Class aptent
            taciti sociosqu ad litora torquent per conubia nostra, per inceptos
            himenaeos. Proin efficitur euismod convallis. Nunc non fringilla
            dolor, a rhoncus eros. Nam et mauris vitae est convallis maximus non
            vel leo.
          </p>
          <img src="/assets/images/sample/image-2.jpg" alt="" />
          <p>
            Etiam at enim condimentum, sodales mi id, posuere neque. Ut
            tincidunt risus sit amet libero cursus, quis dignissim urna
            fermentum. Pellentesque sed velit sit amet sapien tempus porta. Ut
            interdum sollicitudin tellus, vehicula tempus ex dignissim
            ullamcorper. Integer facilisis nisi vel lorem ornare mattis. Nullam
            consequat commodo eros, sed finibus diam feugiat id. Curabitur et
            tortor non ante egestas efficitur. Pellentesque a posuere ex.
            Vivamus elementum eros ac sapien malesuada, sollicitudin auctor
            lacus semper. Integer ac sagittis dui. Nunc id erat efficitur dui
            imperdiet consectetur. Proin vel elementum felis, quis faucibus mi.
            Vivamus maximus erat nec molestie suscipit. Phasellus ultrices urna
            quis est lacinia, vel ultrices justo aliquet. Phasellus fringilla
            magna orci, sed scelerisque neque hendrerit ac. Aenean tristique
            erat fermentum porttitor iaculis.
          </p>
          <img src="/assets/images/sample/image-3.jpg" alt="" />
          <p>
            Vivamus ut massa fermentum, posuere ex vel, efficitur sem. Interdum
            et malesuada fames ac ante ipsum primis in faucibus. Pellentesque
            imperdiet at nisl sit amet consectetur. Cras quis iaculis erat.
            Integer semper ornare feugiat. Nullam et ante risus. Phasellus quis
            iaculis ex. Aenean et mollis leo.
          </p>
        </div>
      </ImageViewerProvider>
      <ImageViewerProvider>
        <div className="mt-14 flex flex-col gap-4 border border-zinc-700 p-4 text-sm md:text-base">
          <p className="bg-zinc-700 p-4 text-2xl font-bold">Gallery viewer</p>
          <img src="/assets/images/sample/image-4.jpg" alt="" />
          <p>
            Nulla consequat, orci a aliquam sodales, justo mauris eleifend
            mauris, et molestie metus odio ac massa. Suspendisse potenti.
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
            posuere cubilia curae; Sed varius, ipsum id fringilla imperdiet,
            nisl justo facilisis est, a volutpat mi erat vitae sem. Sed luctus
            lorem ac arcu pellentesque tempor. Sed varius nulla ac nibh gravida
            viverra. Sed in scelerisque quam. Maecenas faucibus malesuada eros
            lobortis accumsan. In gravida augue tortor, varius porttitor nibh
            eleifend non. Phasellus eu pharetra erat. Curabitur nec consectetur
            justo.
          </p>
          <img src="/assets/images/sample/image-5.jpg" alt="" />
          <p>
            Curabitur id purus id ligula venenatis venenatis vel sit amet lorem.
            Suspendisse vitae dui metus. Curabitur laoreet sit amet risus eu
            vehicula. Phasellus in enim turpis. Nunc urna eros, aliquet at
            sodales non, ultricies aliquam diam. Etiam sed dapibus dolor. Mauris
            varius velit enim, sit amet volutpat nulla ultricies facilisis.
            Mauris ut massa ex. Proin vehicula ultrices eros eu placerat. Ut
            accumsan metus sed tristique ornare. Curabitur tempus erat non
            tellus fringilla, quis rhoncus enim efficitur. Etiam cursus varius
            rutrum.
          </p>
          <img src="/assets/images/sample/image-6.jpg" alt="" />
          <p>
            Nulla consequat, orci a aliquam sodales, justo mauris eleifend
            mauris, et molestie metus odio ac massa. Suspendisse potenti.
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
            posuere cubilia curae; Sed varius, ipsum id fringilla imperdiet,
            nisl justo facilisis est, a volutpat mi erat vitae sem. Sed luctus
            lorem ac arcu pellentesque tempor. Sed varius nulla ac nibh gravida
            viverra. Sed in scelerisque quam. Maecenas faucibus malesuada eros
            lobortis accumsan. In gravida augue tortor, varius porttitor nibh
            eleifend non. Phasellus eu pharetra erat. Curabitur nec consectetur
            justo.
          </p>
          <img src="/assets/images/sample/image-7.jpg" alt="" />
          <p>
            Nulla consequat, orci a aliquam sodales, justo mauris eleifend
            mauris, et molestie metus odio ac massa. Suspendisse potenti.
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
            posuere cubilia curae; Sed varius, ipsum id fringilla imperdiet,
            nisl justo facilisis est, a volutpat mi erat vitae sem. Sed luctus
            lorem ac arcu pellentesque tempor. Sed varius nulla ac nibh gravida
            viverra. Sed in scelerisque quam. Maecenas faucibus malesuada eros
            lobortis accumsan. In gravida augue tortor, varius porttitor nibh
            eleifend non. Phasellus eu pharetra erat. Curabitur nec consectetur
            justo.
          </p>
          <img src="/assets/images/sample/image-8.jpg" alt="" />
          <p>
            Nulla consequat, orci a aliquam sodales, justo mauris eleifend
            mauris, et molestie metus odio ac massa. Suspendisse potenti.
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
            posuere cubilia curae; Sed varius, ipsum id fringilla imperdiet,
            nisl justo facilisis est, a volutpat mi erat vitae sem. Sed luctus
            lorem ac arcu pellentesque tempor. Sed varius nulla ac nibh gravida
            viverra. Sed in scelerisque quam. Maecenas faucibus malesuada eros
            lobortis accumsan. In gravida augue tortor, varius porttitor nibh
            eleifend non. Phasellus eu pharetra erat. Curabitur nec consectetur
            justo.
          </p>
        </div>
      </ImageViewerProvider>
    </>
  );
}
