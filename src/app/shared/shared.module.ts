import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ScrollingModule } from '@angular/cdk/scrolling';

import {
  FontAwesomeModule,
  FaIconLibrary,
} from '@fortawesome/angular-fontawesome';
import {
  faBars,
  faBell,
  faEnvelope,
  faExternalLinkAlt,
  faTimes,
} from '@fortawesome/free-solid-svg-icons';

import { PrimeNgModule } from '@app/primeng/primeng.module';
import { ListComponent } from '@app/shared/components/list/list.component';
import { CardComponent } from '@app/shared/components/card/card.component';
import { SidebarComponent } from '@app/shared/components/sidebar/sidebar.component';
import { LoggedUserInfoComponent } from '@app/shared/components/logged-user-info/logged-user-info.component';
import { LinkComponent } from '@app/shared/components/link/link.component';
import { NavTabsComponent } from '@app/shared/components/tabs/nav-tab.component';
import { CounterComponent } from '@app/shared/components/counter/counter.component';
import { KeydownWatcherDirective } from '@app/shared/directives/keydown-watcher/keydown-watcher.directive';
import { OverflowRemoverDirective } from '@app/shared/directives/overflow-remover/overflow-remover.directive';

const COMPONENTS = [
  ListComponent,
  CardComponent,
  SidebarComponent,
  LoggedUserInfoComponent,
  LinkComponent,
  NavTabsComponent,
  CounterComponent,
];

const DIRECTIVES = [KeydownWatcherDirective, OverflowRemoverDirective];

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
    DIRECTIVES,
  ],
  declarations: [COMPONENTS, DIRECTIVES],
})
export class SharedModule {
  constructor(library: FaIconLibrary) {
    library.addIcons(faBars, faBell, faExternalLinkAlt, faTimes, faEnvelope);
  }
}
