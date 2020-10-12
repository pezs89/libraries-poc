import { CommonModule } from '@angular/common';
import { NgModule, Optional, SkipSelf } from '@angular/core';

import { SharedModule } from '@app/shared/shared.module';
import { MainNavigationComponent } from '@app/core/components/main-navigation/main-navigation.component';
import { HeaderComponent } from '@app/core/components/header/header.component';

const COMPONENTS = [MainNavigationComponent, HeaderComponent];

@NgModule({
  imports: [CommonModule, SharedModule],
  declarations: [COMPONENTS],
  exports: [COMPONENTS],
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(
        'CoreModule has already been loaded. You should only import Core modules in the AppModule only.'
      );
    }
  }
}
