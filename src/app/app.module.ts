import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NewUserComponent } from './componets/new-user/new-user.component';
import { AddInventoryComponent } from './componets/add-inventory/add-inventory.component';
import { UpdateInventoryComponent } from './componets/update-inventory/update-inventory.component';
import { InventoryComponent } from './componets/inventory/inventory.component';
import { StockComponent } from './componets/stock/stock.component';
import { SalesReportComponent } from './componets/sales-report/sales-report.component';
import { IncomeReportComponent } from './componets/income-report/income-report.component';
import { ToolBarComponent } from './componets/tool-bar/tool-bar.component';
import { NavigationBarComponent } from './componets/navigation-bar/navigation-bar.component';
import { SalesComponent } from './componets/sales/sales.component';
import { LoginComponent } from './componets/login/login.component';
import { HomeComponent } from './componets/home/home.component';
import { NavFilterComponent } from './componets/nav-filter/nav-filter.component';
import { SelectProductComponent } from './componets/select-product/select-product.component';
import { TryComponent } from './componets/try/try.component';

const appRoutes: Routes = [
  { path: 'newUser', component: NewUserComponent },
  { path: 'login', component: LoginComponent },
  { path: 'try', component: TryComponent },
  { path: 'salesSelect', component: SelectProductComponent },
  { path: 'home', component: HomeComponent },
  {path: 'add-inventory', component: AddInventoryComponent },
  {path: 'inventory', component: InventoryComponent },
  { path: 'update-inventory', component: UpdateInventoryComponent},
  { path: 'stock', component: StockComponent },
  { path: 'sales-report', component: SalesReportComponent },
  { path: 'sales', component: SalesComponent },
  { path: 'income-report', component: IncomeReportComponent },
  { path: 'select-product', component: SelectProductComponent},
  { path: '**', redirectTo: 'home' }
];

@NgModule({
  declarations: [
    AppComponent,
    NewUserComponent,
    AddInventoryComponent,
    UpdateInventoryComponent,
    InventoryComponent,
    StockComponent,
    SalesReportComponent,
    IncomeReportComponent,
    ToolBarComponent,
    NavigationBarComponent,
    SalesComponent,
    LoginComponent,
    HomeComponent,
    NavFilterComponent,
    SelectProductComponent,
    TryComponent
  ],
  imports: [
    BrowserModule,
  
  
  RouterModule.forRoot(appRoutes, { useHash: true, scrollPositionRestoration: 'enabled' })

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
