export interface AccountVariant {
  name: string;
  price: string;
  discount?: string;
}

export interface Account {
  id: string;
  title: string;
  image: string;
  bgImage: string;
  description: string;
  rating: number;
  warranty: string;
  devices: string;
  features: string[];
  variants: AccountVariant[];
}

export interface AccountDetails {
  [key: string]: Account;
}
