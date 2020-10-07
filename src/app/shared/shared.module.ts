import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ScrollingModule } from '@angular/cdk/scrolling';

import { PrimeNgModule } from '@app/primeng/primeng.module';
import { HeaderComponent } from '@app/shared/components/header/header.component';

const COMPONENTS = [HeaderComponent];
@NgModule({
  imports: [CommonModule, ReactiveFormsModule, PrimeNgModule],
  exports: [ReactiveFormsModule, PrimeNgModule, ScrollingModule, COMPONENTS],
  declarations: [COMPONENTS],
})
export class SharedModule {}
