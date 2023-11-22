import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IActionItem } from '../interfaces/interfaces';
import { actionItems } from '../data';

@Component({
  selector: 'app-action-items',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './action-items.component.html',
  styleUrl: './action-items.component.scss',
})
export class ActionItemsComponent {
  actionItems: IActionItem[] = actionItems;
}
