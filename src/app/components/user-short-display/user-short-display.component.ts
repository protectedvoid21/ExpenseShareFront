import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-user-short-display',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './user-short-display.component.html',
  styleUrls: ['./user-short-display.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserShortDisplayComponent { }
