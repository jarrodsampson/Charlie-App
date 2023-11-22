import {
  ICreditCard,
  INavigationTab,
  IActionItem,
  ITransaction,
  IContainer,
} from '../interfaces/interfaces';

export const creditCardEntries: ICreditCard[] = [
  { amount: 542.25, cardNumber: '5432109876544587', cardType: 'MasterCard' },
  { amount: 100.0, cardNumber: '1234567812345670', cardType: 'Visa' },
  { amount: 120.75, cardNumber: '4111111111111111', cardType: 'Visa' },
  { amount: 250.0, cardNumber: '5432109876547612', cardType: 'MasterCard' },
];

export const actionItems: IActionItem[] = [
  { label: 'Send', icon: 'send-money' },
  { label: 'Receive', icon: 'money-withdrawal' },
  { label: 'Utilities', icon: 'bank' },
  { label: 'Stats', icon: 'pie-chart' },
];

export const bottomTabs: INavigationTab[] = [
  { label: 'Home', icon: 'home' },
  { label: 'Exchange', icon: 'exchange-rate' },
  { label: 'Map', icon: 'pin' },
  { label: 'Settings', icon: 'settings' },
];

export const transactions: ITransaction[] = [
  {
    image: 'hulu.jpeg',
    name: 'Hulu',
    date: '2023-11-17',
    time: '10:30',
    cost: 25.0,
  },
  {
    image: 'prime.png',
    name: 'Amazon Prime',
    date: '2023-11-18',
    time: '1:40',
    cost: 255.0,
  },
  {
    image: 'disney.jpeg',
    name: 'Disney Plus',
    date: '2023-11-19',
    time: '14:15',
    cost: 40.5,
  },
  {
    image: 'starbucks.png',
    name: 'Starbucks',
    date: '2023-11-20',
    time: '09:45',
    cost: 5.42,
  },
  {
    image: 'netflix.jpeg',
    name: 'Netflix',
    date: '2023-11-20',
    time: '17:20',
    cost: 9.99,
  },
];

export const containerGradients: IContainer = {
  MasterCard: 'linear-gradient(to right, #4b4f5b, #6b7183)',
  Visa: 'linear-gradient(to right, #407288, #189BD4)',
};
