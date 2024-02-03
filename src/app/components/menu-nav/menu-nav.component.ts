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
    { name: 'Strona główna', link: '/', icon: 'home' },
    { name: 'Wydatki', link: '/expenses', icon: 'receipt' },
    { name: 'Przychody', link: '/incomes', icon: 'trending_up' },
    { name: 'Grupy', link: '/budgets', icon: 'account_balance_wallet' },
    { name: 'Podsumowanie', link: '/categories', icon: 'category' },
    { name: 'Ustawienia', link: '/settings', icon: 'settings'},
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
