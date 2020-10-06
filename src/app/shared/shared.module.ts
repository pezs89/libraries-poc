import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { PrimeNgModule } from '@app/primeng/primeng.module';
import { HeaderComponent } from './components/header/header.component';

const COMPONENTS = [HeaderComponent];
@NgModule({
  imports: [CommonModule, ReactiveFormsModule, PrimeNgModule],
  exports: [ReactiveFormsModule, PrimeNgModule, COMPONENTS],
  declarations: [COMPONENTS],
})
export class SharedModule {}
