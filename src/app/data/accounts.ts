export interface Account {
  title: string;
  image: string;
  category: string;
  price: string;
  popular: boolean;
  stock: string;
}

export interface AccountsData {
  accounts: Account[];
}
