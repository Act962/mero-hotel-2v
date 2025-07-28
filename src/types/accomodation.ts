export interface AccomodationService {
  name: string;
  description: string;
}

export interface Accomodation {
  name: string;
  slug: string;
  title: string;
  description: string;
  link: string;
  services: AccomodationService[];
  images: string[];
}
