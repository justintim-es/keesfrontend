import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './routes/kees/admin/admin.component';
import { KeesComponent } from './routes/kees/kees.component';
import { CustomerProductsComponent } from './routes/landing/customer-products/customer-products.component';
import { LandingComponent } from './routes/landing/landing.component';
import { CanActivateService } from './services/can-activate.service';

const routes: Routes = [
  {
    path: '', component: LandingComponent
  },
  {
    path: 'kees', component: KeesComponent,
  },
  {
    path: 'kees/admin', component: AdminComponent, canActivate: [CanActivateService]
  },
  {
    path: 'products', component: CustomerProductsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
