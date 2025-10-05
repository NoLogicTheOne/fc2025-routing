export const RouteIds = {
  // Основные страницы
  home: 'home',

  // Links раздел
  links: 'links',
  linkNavigate: 'linkNavigate',
  linkString: 'linkString',
  linkFunction: 'linkFunction',
  linkInterpolate: 'linkInterpolate',

  // Wildcard роуты
  notFound: 'notFound',
  any: 'any',
} as const;

export type RouteIds = (typeof RouteIds)[keyof typeof RouteIds];
