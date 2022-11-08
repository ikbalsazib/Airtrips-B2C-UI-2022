export interface Blog {
  _id?: string;
  title: string;
  titleBangla?: string;
  slug: string;
  author: string;
  shortDescription: string;
  body: string;
  image?: any;
  blogFaq: FaqObject[];
  priority?: number;
  createdAt: any;
  updatedAt: any;
}

export interface FaqObject {
  faqTitle: string;
  faqBody: string;
}
