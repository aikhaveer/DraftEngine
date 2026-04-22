export const APP_NAME = process.env.NEXT_PUBLIC_APP_NAME ?? 'My App';

export const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL ?? '/api';

export const ROUTES = {
  HOME: '/',
  ABOUT: '/about',
  DASHBOARD: '/dashboard',
  LOGIN: '/login',
};

export const HTTP_STATUS = {
  OK: 200,
  CREATED: 201,
  NO_CONTENT: 204,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  UNPROCESSABLE: 422,
  INTERNAL: 500,
};

export const PAGINATION_DEFAULTS = {
  PAGE: 1,
  LIMIT: 20,
};
