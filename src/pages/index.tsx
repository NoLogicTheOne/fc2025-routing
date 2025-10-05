import { BrowserRouter, useRoutes, type RouteObject } from 'react-router-dom';
import { RouteIds } from '../constants/routeIds';
import { AppLayout } from '../components/Layout';
import { MainPage } from './MainPage';
import { NotFoundPage } from './NotFoundPage';
import { LinkFunctionPage } from './LinkFunctionPage';
import { LinkStringPage } from './LinkStringPage';
import { LinkNavigatePage } from './LinkNavigatePage';
import { LinksPage } from './LinksPage';
import { LinkInterpolatePage } from './LinkInterpolatePage';

export type ExtendedRouteObject = RouteObject & {
  id?: RouteIds;
};

const ROUTES = [
  {
    id: RouteIds.home,
    path: '/',
    element: <MainPage />,
  },
  {
    id: RouteIds.links,
    path: ':linkId',
    children: [
      {
        index: true,
        element: <LinksPage />,
      },
      {
        id: RouteIds.linkNavigate,
        path: 'navigate/',
        element: <LinkNavigatePage />,
      },
      {
        id: RouteIds.linkString,
        path: 'string',
        element: <LinkStringPage />,
      },
      {
        id: RouteIds.linkFunction,
        path: 'function',
        element: <LinkFunctionPage />,
      },
      {
        id: RouteIds.linkInterpolate,
        path: 'interpolate',
        element: <LinkInterpolatePage />,
      },
    ],
  },

  //   404 и wildcard
  {
    id: RouteIds.any,
    path: '*',
    element: <NotFoundPage />,
  },
] as const satisfies ExtendedRouteObject[];

function AppRoutes() {
  const routes = useRoutes(ROUTES);
  return <AppLayout>{routes}</AppLayout>;
}

export function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}

export type Routes = typeof ROUTES;
