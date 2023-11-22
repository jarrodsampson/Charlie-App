import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { INavigationTab } from '../interfaces/interfaces';

import { bottomTabs } from '../data';

@Component({
  selector: 'app-bottom-tabs',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './bottom-tabs.component.html',
  styleUrl: './bottom-tabs.component.scss',
})
export class BottomTabsComponent {
  bottomTabs: INavigationTab[] = bottomTabs;
}
