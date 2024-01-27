import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-menu-nav',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './menu-nav.component.html',
  styleUrls: ['./menu-nav.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MenuNavComponent {
  readonly menuItems: MenuItem[] = [
    { name: 'Home', link: '/' },
    { name: 'Expenses', link: '/expenses' },
    { name: 'Incomes', link: '/incomes' },
    { name: 'Budgets', link: '/budgets' },
    { name: 'Settings', link: '/settings' },
  ];

  @ViewChild('menuIcon') menuIcon!: ElementRef<HTMLDivElement>;
  @ViewChild('menuList') menuList!: ElementRef<HTMLDivElement>;

  ngAfterViewInit() {
    this.menuIcon.nativeElement.addEventListener('click', () => {
      this.menuList.nativeElement.classList.toggle('slide-in');
      this.menuList.nativeElement.classList.toggle('slide-out');
      
      this.menuIcon.nativeElement.classList.toggle('open');
    });
  }
}

interface MenuItem {
  name: string;
  link: string;
}
