import { NavTab } from '@app/shared/models/tab';

export const removeTabHandler = (
  removableItem: NavTab,
  list: NavTab[],
  activeRouteName: string
) => {
  if (list.length <= 1) {
    return { list, activeRouteName };
  }
  let newRouteName: string;
  const removableNavItemIndex = findRemovableNavItemIndex(removableItem, list);
  if (removableItem.route === activeRouteName) {
    newRouteName = list[removableNavItemIndex - 1].route;
  } else {
    newRouteName = activeRouteName;
  }
  const newList = list.filter(
    (listItem) => listItem.route !== removableItem.route
  );
  return {
    list: newList,
    activeRouteName: newRouteName,
  };
};

export const findRemovableNavItemIndex = (
  item: NavTab,
  list: NavTab[]
): number => list.findIndex((listItem) => listItem.route === item.route);
