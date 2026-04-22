export function cn(...classes) {
  return classes.filter(Boolean).join(' ');
}

export function formatCurrency(amount, currency = 'USD', locale = 'en-US') {
  return new Intl.NumberFormat(locale, { style: 'currency', currency }).format(amount);
}

export function formatDate(date, options = {}) {
  const defaults = { year: 'numeric', month: 'short', day: 'numeric' };
  return new Intl.DateTimeFormat('en-US', { ...defaults, ...options }).format(new Date(date));
}

export function truncate(str, maxLength = 80) {
  if (str.length <= maxLength) return str;
  return `${str.slice(0, maxLength - 1)}…`;
}

export function slugify(str) {
  return str
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

export function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
