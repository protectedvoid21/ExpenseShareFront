import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ExpenseItemComponent } from "../../components/expense-item/expense-item.component";
import { UserShortDisplayComponent } from "../../components/user-short-display/user-short-display.component";

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [
        CommonModule,
        ExpenseItemComponent,
        UserShortDisplayComponent
    ]
})
export class HomeComponent { }
