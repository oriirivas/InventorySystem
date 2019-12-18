import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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
    NavigationBarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
