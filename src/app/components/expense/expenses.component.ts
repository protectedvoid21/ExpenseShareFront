import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-expenses',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './expenses.component.html',
  styleUrls: ['./expenses.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExpensesComponent { 
  expenses: ExpenseModel[] = [
    { name: 'Groceries', amount: 103.04, date: '2021-01-01' },
    { name: 'Gas', amount: 29.89, date: '2021-01-02' },
    { name: 'Rent', amount: 230.01, date: '2021-01-03' },
  ];
}

interface ExpenseModel {
  name: string;
  amount: number;
  date: string;
}
