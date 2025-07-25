export type GalleryImage = {
  src: string;
  alt: string;
  caption?: string;
  children: React.ReactNode;
};

export type SimpleImage = {
  src: string;
  alt: string;
  caption?: string;
};

export type VerticalScrollGalleryProps = {
  galleryImages: GalleryImage[];
};

export type VerticalImageGalleryProps = {
  images: SimpleImage[];
};
