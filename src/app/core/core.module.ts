import { CommonModule } from '@angular/common';
import { NgModule, Optional, SkipSelf } from '@angular/core';

import { SharedModule } from '@app/shared/shared.module';
import { MainNavigationComponent } from '@app/core/components/main-navigation/main-navigation.component';
import { HeaderComponent } from '@app/core/components/header/header.component';
import { TabsComponent } from '@app/core/containers/tabs/tabs.component';
import { NotificationComponent } from '@app/core/components/notification/notification.component';
import { EmailComponent } from '@app/core/components/email/email.component';

const CONTAINERS = [TabsComponent];
const COMPONENTS = [
  MainNavigationComponent,
  HeaderComponent,
  NotificationComponent,
  EmailComponent,
];

@NgModule({
  imports: [CommonModule, SharedModule],
  declarations: [COMPONENTS, CONTAINERS],
  exports: [COMPONENTS, CONTAINERS],
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
