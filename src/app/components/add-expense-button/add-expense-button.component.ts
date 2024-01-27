import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-add-expense-button',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './add-expense-button.component.html',
  styleUrls: ['./add-expense-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddExpenseButtonComponent { }
