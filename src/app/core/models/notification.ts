import { NotificationPriorities } from '../enums/notification-priorities';

export interface Notification {
  priority: NotificationPriorities;
  description: string;
}
