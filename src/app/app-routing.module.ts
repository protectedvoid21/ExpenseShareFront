import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { LoginComponent } from './views/login/login.component';
import { ReceiptCreatorComponent } from './views/receipt-creator/receipt-creator.component';
import activateWhenAuth from './services/auth.guard';

const routes: Routes = [
  { path: '', component: HomeComponent, canActivate: [activateWhenAuth]},
  { path: 'login', component: LoginComponent },
  { path: 'receipt/create', component: ReceiptCreatorComponent, canActivate: [activateWhenAuth] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
