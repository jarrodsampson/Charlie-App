import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ITransaction } from '../interfaces/interfaces';
import { transactions } from '../data';

@Component({
  selector: 'app-transactions',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './transactions.component.html',
  styleUrl: './transactions.component.scss',
})
export class TransactionsComponent implements OnInit {
  transactions: ITransaction[] = transactions;
  today: Date = new Date();
  yesterday: Date = new Date();

  ngOnInit() {
    this.yesterday.setDate(this.today.getDate() - 1);
  }

  // Function to group transactions by date
  groupTransactionsByDate(transactions: ITransaction[]): {
    [key: string]: ITransaction[];
  } {
    const grouped = transactions.reverse().reduce((grouped, transaction) => {
      const date = transaction.date;
      grouped[date] = (grouped[date] || []).concat(transaction);
      console.log(grouped);
      return grouped;
    }, {} as { [key: string]: ITransaction[] });

    // Sort keys (dates) in descending order and create a new object
    const sortedGrouped: { [key: string]: ITransaction[] } = {};
    Object.keys(grouped)
      .sort((a, b) => new Date(b).getTime() - new Date(a).getTime())
      .forEach((date) => {
        sortedGrouped[date] = grouped[date];
      });
    return sortedGrouped;
  }

  reverseArrayOrder(array: any[]): any[] {
    return array.slice().reverse();
  }
}
