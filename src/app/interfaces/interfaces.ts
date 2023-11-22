export interface ICreditCard {
  amount: number;
  cardNumber: string;
  cardType: string;
}

export interface INavigationTab {
  label: string;
  icon: string;
}

export interface IActionItem {
  label: string;
  icon: string;
}

export interface ITransaction {
  image: string;
  name: string;
  date: string;
  time: string;
  cost: number;
}

export interface IContainer {
  [key: string]: string;
}
