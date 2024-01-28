import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from "./views/home/home.component";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { MenuNavComponent } from "./components/menu-nav/menu-nav.component";
import { UserShortDisplayComponent } from './components/user-short-display/user-short-display.component';
import { ExpensesComponent } from './components/expense/expenses.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    declarations: [
        AppComponent
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        HomeComponent,
        ExpensesComponent,
        NavbarComponent,
        MenuNavComponent,
        UserShortDisplayComponent
    ]
})
export class AppModule { }
