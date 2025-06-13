import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: '<Lani.log />',
    short_name: '<Lani.log />',
    description: 'Lani.log',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#000000',
    icons: [
      {
        src: '/assets/images/icons/192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/assets/images/icons/512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  };
}
