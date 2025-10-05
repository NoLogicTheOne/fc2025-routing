import type { AllPaths } from '../types/route';

export const ROUTES: AllPaths = {
  home: '/',
  userSettings: '/users/:userId/settings',
  dashboard: '/dashboard',
  dashboardAnalytics: '/dashboard/analytics/',
  dashboardReports: '/dashboard/reports',
  admin: '/admin',
  adminUsers: '/admin/users',
  any: '/*',
  basicRouting: '/basic-routing',
  userProfile: '/users/:userId',
  productDetails: '/products/:productId',
  categoryProducts: '/categories/:categoryId/products',
  fileViewer: '/files/:folderId/:fileId',
  blogPost: '/blog/:slug/:commentId?',
  adminSettings: '/admin/settings',
  documentation: '/docs',
  notFound: '/not-found',
};
