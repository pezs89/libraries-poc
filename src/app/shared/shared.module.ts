import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ScrollingModule } from '@angular/cdk/scrolling';

import {
  FontAwesomeModule,
  FaIconLibrary,
} from '@fortawesome/angular-fontawesome';
import { faBars, faBell } from '@fortawesome/free-solid-svg-icons';

import { PrimeNgModule } from '@app/primeng/primeng.module';
import { ListComponent } from '@app/shared/components/list/list.component';
import { CardComponent } from '@app/shared/components/card/card.component';
import { SidebarComponent } from '@app/shared/components/sidebar/sidebar.component';
import { LoggedUserInfoComponent } from '@app/shared/components/logged-user-info/logged-user-info.component';
import { LinkComponent } from './link/link.component';
import { RouterModule } from '@angular/router';

const COMPONENTS = [
  ListComponent,
  CardComponent,
  SidebarComponent,
  LoggedUserInfoComponent,
  LinkComponent,
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule,
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
