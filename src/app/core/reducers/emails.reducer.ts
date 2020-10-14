import { createReducer } from '@ngrx/store';
import { Email } from '@app/core/models/email';

export const emailsFeatureKey = 'emails';

export interface State {
  emails: Email[];
}

export const initialState: State = {
  emails: [
    {
      from: 'Zsolt Peter',
      title: 'Reminder about',
      body: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eu turpis condimentum, fermentum risus at, placerat est. Quisque volutpat varius lacus, et pellentesque lacus fermentum vitae. Integer aliquam libero nec justo hendrerit, in fermentum lectus venenatis. Curabitur luctus, justo ut iaculis ullamcorper, quam tellus malesuada ipsum, eu congue libero risus vel mauris.`,
    },
    {
      from: 'Zsolt Peter',
      title: 'Urgent!!!',
      body:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eu turpis condimentum, fermentum risus at, placerat est. Quisque volutpat varius lacus, et pellentesque lacus fermentum vitae. Integer aliquam libero nec justo hendrerit, in fermentum lectus venenatis. Curabitur luctus, justo ut iaculis ullamcorper, quam tellus malesuada ipsum, eu congue libero risus vel mauris.',
    },
    {
      from: 'Zsolt Peter',
      title: 'Meeting invitation',
      body:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eu turpis condimentum, fermentum risus at, placerat est. Quisque volutpat varius lacus, et pellentesque lacus fermentum vitae. Integer aliquam libero nec justo hendrerit, in fermentum lectus venenatis. Curabitur luctus, justo ut iaculis ullamcorper, quam tellus malesuada ipsum, eu congue libero risus vel mauris.',
    },
  ],
};

export const reducer = createReducer(initialState);
