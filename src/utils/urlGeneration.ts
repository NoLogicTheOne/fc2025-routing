import type { ROUTES } from '../constants/routes';
import type { Values } from '../types/common';

export function generatePath(path: Values<typeof ROUTES>, params?: Record<string, string>): string {
  if (!params) {
    return path;
  }

  return Object.entries(params).reduce((acc, [key, value]) => acc.replaceAll(`:${key}`, value), path);
}
