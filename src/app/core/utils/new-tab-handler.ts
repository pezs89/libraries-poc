import { NavTab } from '@app/shared/models/tab';

export const newTabHandler = (newRoute: string, tabs: NavTab[]): NavTab[] => {
  const isRouteAlreadyAdded = checkRouteIsAleadyAdded(newRoute, tabs);
  if (isRouteAlreadyAdded) {
    return tabs;
  } else {
    return [
      ...tabs,
      createNewTab(newRoute),
    ];
  }
};

export const checkRouteIsAleadyAdded = (
  newRoute: string,
  tabs: NavTab[]
): boolean => !!tabs.find((tab) => tab.route === newRoute);

export const createNewTab = (newRoute: string): NavTab => ({
  route: newRoute,
  label: newRoute.substring(1, newRoute.length)
});
