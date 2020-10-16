import { createReducer } from '@ngrx/store';
import { Notification } from '@app/core/models/notification';
import { NotificationPriorities } from '../enums/notification-priorities';

export const notificationsFeatureKey = 'notifications';

export interface State {
  notifications: Notification[];
}

export const initialState: State = {
  notifications: [
    {
      priority: NotificationPriorities.HIGH,
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eu turpis condimentum, fermentum risus at, placerat est. Quisque volutpat varius lacus, et pellentesque lacus fermentum vitae. Integer aliquam libero nec justo hendrerit, in fermentum lectus venenatis. Curabitur luctus, justo ut iaculis ullamcorper, quam tellus malesuada ipsum, eu congue libero risus vel mauris.`,
    },
    {
      priority: NotificationPriorities.MEDIUM,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eu turpis condimentum, fermentum risus at, placerat est. Quisque volutpat varius lacus, et pellentesque lacus fermentum vitae. Integer aliquam libero nec justo hendrerit, in fermentum lectus venenatis. Curabitur luctus, justo ut iaculis ullamcorper, quam tellus malesuada ipsum, eu congue libero risus vel mauris.',
    },
    {
      priority: NotificationPriorities.LOW,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eu turpis condimentum, fermentum risus at, placerat est. Quisque volutpat varius lacus, et pellentesque lacus fermentum vitae. Integer aliquam libero nec justo hendrerit, in fermentum lectus venenatis. Curabitur luctus, justo ut iaculis ullamcorper, quam tellus malesuada ipsum, eu congue libero risus vel mauris.',
    },
    {
      priority: NotificationPriorities.LOW,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eu turpis condimentum, fermentum risus at, placerat est. Quisque volutpat varius lacus, et pellentesque lacus fermentum vitae. Integer aliquam libero nec justo hendrerit, in fermentum lectus venenatis. Curabitur luctus, justo ut iaculis ullamcorper, quam tellus malesuada ipsum, eu congue libero risus vel mauris.',
    },
    {
      priority: NotificationPriorities.HIGH,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eu turpis condimentum, fermentum risus at, placerat est. Quisque volutpat varius lacus, et pellentesque lacus fermentum vitae. Integer aliquam libero nec justo hendrerit, in fermentum lectus venenatis. Curabitur luctus, justo ut iaculis ullamcorper, quam tellus malesuada ipsum, eu congue libero risus vel mauris.',
    },
    {
      priority: NotificationPriorities.MEDIUM,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eu turpis condimentum, fermentum risus at, placerat est. Quisque volutpat varius lacus, et pellentesque lacus fermentum vitae. Integer aliquam libero nec justo hendrerit, in fermentum lectus venenatis. Curabitur luctus, justo ut iaculis ullamcorper, quam tellus malesuada ipsum, eu congue libero risus vel mauris.',
    },
    {
      priority: NotificationPriorities.LOW,
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eu turpis condimentum, fermentum risus at, placerat est. Quisque volutpat varius lacus, et pellentesque lacus fermentum vitae. Integer aliquam libero nec justo hendrerit, in fermentum lectus venenatis. Curabitur luctus, justo ut iaculis ullamcorper, quam tellus malesuada ipsum, eu congue libero risus vel mauris.',
    },
    {
      priority: NotificationPriorities.HIGH,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eu turpis condimentum, fermentum risus at, placerat est. Quisque volutpat varius lacus, et pellentesque lacus fermentum vitae. Integer aliquam libero nec justo hendrerit, in fermentum lectus venenatis. Curabitur luctus, justo ut iaculis ullamcorper, quam tellus malesuada ipsum, eu congue libero risus vel mauris.',
    },
    {
      priority: NotificationPriorities.MEDIUM,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eu turpis condimentum, fermentum risus at, placerat est. Quisque volutpat varius lacus, et pellentesque lacus fermentum vitae. Integer aliquam libero nec justo hendrerit, in fermentum lectus venenatis. Curabitur luctus, justo ut iaculis ullamcorper, quam tellus malesuada ipsum, eu congue libero risus vel mauris.',
    },
    {
      priority: NotificationPriorities.LOW,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eu turpis condimentum, fermentum risus at, placerat est. Quisque volutpat varius lacus, et pellentesque lacus fermentum vitae. Integer aliquam libero nec justo hendrerit, in fermentum lectus venenatis. Curabitur luctus, justo ut iaculis ullamcorper, quam tellus malesuada ipsum, eu congue libero risus vel mauris.',
    },
    {
      priority: NotificationPriorities.HIGH,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eu turpis condimentum, fermentum risus at, placerat est. Quisque volutpat varius lacus, et pellentesque lacus fermentum vitae. Integer aliquam libero nec justo hendrerit, in fermentum lectus venenatis. Curabitur luctus, justo ut iaculis ullamcorper, quam tellus malesuada ipsum, eu congue libero risus vel mauris.',
    },
    {
      priority: NotificationPriorities.MEDIUM,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eu turpis condimentum, fermentum risus at, placerat est. Quisque volutpat varius lacus, et pellentesque lacus fermentum vitae. Integer aliquam libero nec justo hendrerit, in fermentum lectus venenatis. Curabitur luctus, justo ut iaculis ullamcorper, quam tellus malesuada ipsum, eu congue libero risus vel mauris.',
    },
    {
      priority: NotificationPriorities.LOW,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eu turpis condimentum, fermentum risus at, placerat est. Quisque volutpat varius lacus, et pellentesque lacus fermentum vitae. Integer aliquam libero nec justo hendrerit, in fermentum lectus venenatis. Curabitur luctus, justo ut iaculis ullamcorper, quam tellus malesuada ipsum, eu congue libero risus vel mauris.',
    },
    {
      priority: NotificationPriorities.HIGH,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eu turpis condimentum, fermentum risus at, placerat est. Quisque volutpat varius lacus, et pellentesque lacus fermentum vitae. Integer aliquam libero nec justo hendrerit, in fermentum lectus venenatis. Curabitur luctus, justo ut iaculis ullamcorper, quam tellus malesuada ipsum, eu congue libero risus vel mauris.',
    },
    {
      priority: NotificationPriorities.MEDIUM,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eu turpis condimentum, fermentum risus at, placerat est. Quisque volutpat varius lacus, et pellentesque lacus fermentum vitae. Integer aliquam libero nec justo hendrerit, in fermentum lectus venenatis. Curabitur luctus, justo ut iaculis ullamcorper, quam tellus malesuada ipsum, eu congue libero risus vel mauris.',
    },
    {
      priority: NotificationPriorities.LOW,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eu turpis condimentum, fermentum risus at, placerat est. Quisque volutpat varius lacus, et pellentesque lacus fermentum vitae. Integer aliquam libero nec justo hendrerit, in fermentum lectus venenatis. Curabitur luctus, justo ut iaculis ullamcorper, quam tellus malesuada ipsum, eu congue libero risus vel mauris.',
    },
    {
      priority: NotificationPriorities.HIGH,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eu turpis condimentum, fermentum risus at, placerat est. Quisque volutpat varius lacus, et pellentesque lacus fermentum vitae. Integer aliquam libero nec justo hendrerit, in fermentum lectus venenatis. Curabitur luctus, justo ut iaculis ullamcorper, quam tellus malesuada ipsum, eu congue libero risus vel mauris.',
    },
    {
      priority: NotificationPriorities.MEDIUM,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eu turpis condimentum, fermentum risus at, placerat est. Quisque volutpat varius lacus, et pellentesque lacus fermentum vitae. Integer aliquam libero nec justo hendrerit, in fermentum lectus venenatis. Curabitur luctus, justo ut iaculis ullamcorper, quam tellus malesuada ipsum, eu congue libero risus vel mauris.',
    },
  ],
};

export const reducer = createReducer(initialState);
