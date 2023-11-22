import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ICreditCard, IContainer } from '../interfaces/interfaces';
import { creditCardEntries, containerGradients } from '../data';

@Component({
  selector: 'app-credit-cards',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './credit-cards.component.html',
  styleUrl: './credit-cards.component.scss',
})
export class CreditCardsComponent {
  containerGradients: IContainer = containerGradients;
  creditCardEntries: ICreditCard[] = creditCardEntries;
  // get the last four digits in the creditCardEntries cardNumber property
  getLastFourDigits(cardNumber: string): string {
    return cardNumber.slice(-4);
  }
}
