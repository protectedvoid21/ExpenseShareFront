import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { UserShortDisplayComponent } from "../../components/user-short-display/user-short-display.component";
import { AddExpenseButtonComponent } from "../../components/add-expense-button/add-expense-button.component";
import { ExpensesComponent } from "../../components/expense/expenses.component";

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [
        CommonModule,
        ExpensesComponent,
        UserShortDisplayComponent,
        AddExpenseButtonComponent,
        ExpensesComponent
    ]
})
export class HomeComponent { }
