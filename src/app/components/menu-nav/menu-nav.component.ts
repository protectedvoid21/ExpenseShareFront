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
    { name: 'Home', link: '/', icon: 'home' },
    { name: 'Expenses', link: '/expenses', icon: 'receipt' },
    { name: 'Incomes', link: '/incomes', icon: 'trending_up' },
    { name: 'Budgets', link: '/budgets', icon: 'account_balance_wallet' },
    { name: 'Settings', link: '/settings', icon: 'settings'},
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
  icon: string;
}
