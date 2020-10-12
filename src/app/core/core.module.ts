import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from '@app/shared/shared.module';
import { MainNavigationComponent } from '@app/core/components/main-navigation/main-navigation.component';
import { HeaderComponent } from '@app/core/components/header/header.component';

const COMPONENTS = [MainNavigationComponent, HeaderComponent];

@NgModule({
  imports: [CommonModule, SharedModule],
  declarations: [COMPONENTS],
  exports: [COMPONENTS],
})
export class CoreModule {}
