import type { AllPaths } from '../types/route';

export const ROUTES: AllPaths = {
  home: '/',
  links: '/:linkId',
  linkNavigate: '/:linkId/navigate',
  linkString: '/:linkId/string',
  linkFunction: '/:linkId/function',
  linkInterpolate: '/:linkId/interpolate',
  any: '/*',
};
