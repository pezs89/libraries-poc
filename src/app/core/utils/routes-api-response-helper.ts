import { NavLink } from '@app/shared/models/nav-link';
import { RoutesApiResponse } from '../models/routes-api-response';

export const routesApiResponseHelper = (
  response: RoutesApiResponse
): NavLink[] =>
  Object.keys(response).map((key) => ({
    url: key,
    name: key,
  }));
