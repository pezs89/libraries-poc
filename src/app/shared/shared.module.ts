import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { PrimeNgModule } from '@app/primeng/primeng.module';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, PrimeNgModule],
  exports: [ReactiveFormsModule, PrimeNgModule],
  declarations: [],
})
export class SharedModule {}
