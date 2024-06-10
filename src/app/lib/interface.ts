export interface simpleBlogCard {
  title: string;
  smallDescription: string;
  currentSlug: string;
  titleImage: unknown;
}

export interface fullBlog {
  title: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  content: any;
  currentSlug: string;
  titleImage: unknown;
}
