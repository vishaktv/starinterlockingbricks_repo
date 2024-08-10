// next-seo.config.js
export default {
    titleTemplate: '%s | STAR & SHINE INTERLOCKING BRICKS',
    defaultTitle: 'STAR & SHINE INTERLOCKING BRICKS',
    description: 'Building a strong foundation with premium interlocking bricks.',
    canonical: 'https://www.yourdomain.com',
    openGraph: {
      type: 'website',
      url: 'https://www.yourdomain.com',
      title: 'STAR & SHINE INTERLOCKING BRICKS',
      description: 'Building a strong foundation with premium interlocking bricks.',
      images: [
        {
          url: 'https://www.yourdomain.com/path-to-image.jpg',
          width: 800,
          height: 600,
          alt: 'STAR & SHINE INTERLOCKING BRICKS',
        },
      ],
    },
    twitter: {
      handle: '@handle',
      site: '@site',
      cardType: 'summary_large_image',
    },
  };
  