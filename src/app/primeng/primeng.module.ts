import { NgModule } from '@angular/core';
import { CardModule } from 'primeng/card';
import { SidebarModule } from 'primeng/sidebar';

@NgModule({
  exports: [CardModule, SidebarModule],
})
export class PrimeNgModule {}
