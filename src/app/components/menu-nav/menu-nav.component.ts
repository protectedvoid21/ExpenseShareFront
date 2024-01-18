import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-menu-nav',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './menu-nav.component.html',
  styleUrls: ['./menu-nav.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MenuNavComponent { }
