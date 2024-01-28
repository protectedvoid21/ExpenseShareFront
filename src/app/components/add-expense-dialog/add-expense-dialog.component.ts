import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, ElementRef, ViewChild } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-add-expense-dialog',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
  ],
  templateUrl: './add-expense-dialog.component.html',
  styleUrls: ['./add-expense-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddExpenseDialogComponent { 
  @ViewChild('addExpenseDialog')
  addExpenseDialog!: ElementRef<HTMLDialogElement>;
  
  show() {
    this.addExpenseDialog.nativeElement.showModal();
  }

  close() {
    this.addExpenseDialog.nativeElement.close();
  }
}
