export interface Offer {
  id: string;
  title: string;
  subtitle: string;
  applicableModels: string[];
  benefitAmount: string;
  description: string;
  validity: string;
  terms: string[];
  badge: string;
}

export interface Review {
  id: string;
  author: string;
  purchasedModel: string;
  rating: number;
  date: string;
  comment: string;
  location: string;
  deliveryImage?: string;
}
