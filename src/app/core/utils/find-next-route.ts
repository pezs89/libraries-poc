import { NavTab } from '@app/shared/models/tab';
import { TabNavigationKeys } from '@app/core/enums/tab-navigation-values';

export const findNextRoute = (
  direction: TabNavigationKeys,
  tabs: NavTab[],
  currentRoute: string
): string => {
  const currentRouteIndex = tabs.findIndex((tab) => tab.route === currentRoute);
  if (direction === TabNavigationKeys.FORWARD) {
    if (currentRouteIndex === tabs.length - 1) {
      return tabs[0].route;
    }
    return tabs[currentRouteIndex + 1].route;
  } else {
    if (currentRouteIndex === 0) {
      return tabs[tabs.length - 1].route;
    }
    return tabs[currentRouteIndex - 1].route;
  }
};
