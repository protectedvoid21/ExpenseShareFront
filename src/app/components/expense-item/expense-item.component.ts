import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-expense-item',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './expense-item.component.html',
  styleUrls: ['./expense-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExpenseItemComponent { }
