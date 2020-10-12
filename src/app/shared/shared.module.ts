import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ScrollingModule } from '@angular/cdk/scrolling';

import { PrimeNgModule } from '@app/primeng/primeng.module';
import { HeaderComponent } from '@app/shared/components/header/header.component';
import { ListComponent } from '@app/shared/components/list/list.component';
import { CardComponent } from '@app/shared/components/card/card.component';

const COMPONENTS = [HeaderComponent, ListComponent, CardComponent];
@NgModule({
  imports: [CommonModule, ReactiveFormsModule, PrimeNgModule, ScrollingModule],
  exports: [ReactiveFormsModule, PrimeNgModule, ScrollingModule, COMPONENTS],
  declarations: [COMPONENTS],
})
export class SharedModule {}
