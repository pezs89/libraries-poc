import { NgModule } from '@angular/core';
import { CardModule } from 'primeng/card';
import { SidebarModule } from 'primeng/sidebar';
import { PaginatorModule } from 'primeng/paginator';

@NgModule({
  exports: [CardModule, SidebarModule, PaginatorModule],
})
export class PrimeNgModule {}
