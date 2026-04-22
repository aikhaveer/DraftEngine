import { API_BASE_URL } from '@/lib/constants';

export class ApiError extends Error {
  constructor(message, status, data) {
    super(message);
    this.name = 'ApiError';
    this.status = status;
    this.data = data;
  }
}

async function request(path, { method = 'GET', body, headers = {} } = {}) {
  const url = path.startsWith('http') ? path : `${API_BASE_URL}${path}`;
  const isJson = body !== undefined && body !== null && typeof body === 'object';

  const res = await fetch(url, {
    method,
    headers: {
      ...(isJson && { 'Content-Type': 'application/json' }),
      ...headers,
    },
    body: isJson ? JSON.stringify(body) : body,
    credentials: 'include',
  });

  const contentType = res.headers.get('content-type') ?? '';
  const data = contentType.includes('application/json') ? await res.json() : await res.text();

  if (!res.ok) {
    const message = data?.error ?? data?.message ?? `HTTP ${res.status}`;
    throw new ApiError(message, res.status, data);
  }

  return data;
}

export const api = {
  get: (path, opts) => request(path, { ...opts, method: 'GET' }),
  post: (path, body, opts) => request(path, { ...opts, method: 'POST', body }),
  put: (path, body, opts) => request(path, { ...opts, method: 'PUT', body }),
  patch: (path, body, opts) => request(path, { ...opts, method: 'PATCH', body }),
  delete: (path, opts) => request(path, { ...opts, method: 'DELETE' }),
};

export const authService = {
  login: (credentials) => api.post('/auth/login', credentials),
  logout: () => api.post('/auth/logout'),
  me: () => api.get('/auth/me'),
};

export const exampleService = {
  list: (params = {}) => {
    const qs = new URLSearchParams(params).toString();
    return api.get(`/example${qs ? `?${qs}` : ''}`);
  },
  create: (data) => api.post('/example', data),
};
