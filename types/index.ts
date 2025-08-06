export interface IEvent {
  _id: string;
  capacity?: any;
  category: string;
  area: string;
  contactInfo?: any;
  date: string;
  shortDescription?: string;
  description?: any;
  featured: boolean;
  gallery: null[][];
  image: Image;
  location: string;
  price: string;
  originalPriceAmount: string;
  rating?: any;
  slug: string;
  title: string;
}

export interface Image {
  _type: string;
  asset: null[];
}

interface IBase {
  _id: string;
  name: string;
  slug: string;
}

export interface ICategory extends IBase {}
export interface IArea extends IBase {}

export interface ISingleEvent {
  _id: string;
  _type: string;
  area: Area;
  capacity: number;
  category: Category;
  date: string;
  description: string;
  featured: boolean;
  gallery: IGallery[];
  image: Image;
  location: string;
  originalPriceAmount: string;
  price: string;
  rating: number;
  reviews: Review[];
  shortDescription: string;
  slug: Slug;
  title: string;
  whatsIncluded: string[];
}

interface Area {
  _id: string;
  name: string;
}

interface Category {
  _id: string;
  name: string;
}

export interface IGallery {
  _key: string;
  _type: string;
  asset: any[];
}

interface Asset {
  _ref: string;
  _type: string;
}

interface Review {
  customerName: string;
  rating: number;
  review: string;
  reviewDate: string;
}

interface Slug {
  _type: string;
  current: string;
}
