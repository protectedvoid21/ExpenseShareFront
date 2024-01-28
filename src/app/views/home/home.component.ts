import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, ElementRef, ViewChild } from '@angular/core';
import { UserShortDisplayComponent } from '../../components/user-short-display/user-short-display.component';
import { ExpensesComponent } from '../../components/expense/expenses.component';
import { AddExpenseDialogComponent } from 'src/app/components/add-expense-dialog/add-expense-dialog.component';
import { MenuNavComponent } from "../../components/menu-nav/menu-nav.component";

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
        ExpensesComponent,
        AddExpenseDialogComponent,
        MenuNavComponent
    ]
})
export class HomeComponent {
  @ViewChild(AddExpenseDialogComponent)
  addExpenseDialog!: AddExpenseDialogComponent;
  
  openAddExpenseDialog() {
    this.addExpenseDialog.show();
  }
}
