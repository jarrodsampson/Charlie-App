import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { BottomTabsComponent } from './bottom-tabs/bottom-tabs.component';
import { TransactionsComponent } from './transactions/transactions.component';
import { CreditCardsComponent } from './credit-cards/credit-cards.component';
import { ActionItemsComponent } from './action-items/action-items.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    BottomTabsComponent,
    TransactionsComponent,
    CreditCardsComponent,
    ActionItemsComponent,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {}
