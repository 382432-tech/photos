export interface Photo {
  id: string;
  title: string;
  category: 'Soccer' | 'Volleyball' | 'Baseball';
  imageUrl: string;
  placeholderAlt: string;
  description?: string;
  paragraph: string;
  linkUrl: string;
  linkLabel: string;
}
