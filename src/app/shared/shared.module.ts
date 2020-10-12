import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ScrollingModule } from '@angular/cdk/scrolling';

import {
  FontAwesomeModule,
  FaIconLibrary,
} from '@fortawesome/angular-fontawesome';
import {
  faBars, faBell,
} from '@fortawesome/free-solid-svg-icons';

import { PrimeNgModule } from '@app/primeng/primeng.module';
import { HeaderComponent } from '@app/shared/components/header/header.component';
import { ListComponent } from '@app/shared/components/list/list.component';
import { CardComponent } from '@app/shared/components/card/card.component';
import { SidebarComponent } from '@app/shared/components/sidebar/sidebar.component';

const COMPONENTS = [
  HeaderComponent,
  ListComponent,
  CardComponent,
  SidebarComponent,
];
@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    PrimeNgModule,
    ScrollingModule,
    FontAwesomeModule,
  ],
  exports: [
    ReactiveFormsModule,
    PrimeNgModule,
    ScrollingModule,
    FontAwesomeModule,
    COMPONENTS,
  ],
  declarations: [COMPONENTS],
})
export class SharedModule {
  constructor(library: FaIconLibrary) {
    library.addIcons(faBars, faBell);
  }
}
