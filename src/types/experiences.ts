type Image = {
  url: string;
  alt: string;
};

export interface Experience {
  title: string;
  slug: string;
  description: string;
  imageUrl: string;
  alt: string;
  link: string;
  flag: string;
  images: Image[];
}