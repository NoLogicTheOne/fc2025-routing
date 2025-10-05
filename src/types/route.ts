import type { Routes, ExtendedRouteObject } from '../pages';
import type { Prettify } from './common';

export type AllPaths = Prettify<HandleRoutes<Routes>>;

// type RemoveTrailingSlashes<Path extends string> = Path extends `/${infer AfterSlash}` ? AfterSlash : Path;
type RemoveDoubleSlashes<Path extends string> = Path extends `${infer Before}//${infer After}`
  ? RemoveDoubleSlashes<`${Before}/${After}`>
  : Path;

type ConcatPaths<
  Path1 extends string,
  Path2 extends string | undefined = '',
> = RemoveDoubleSlashes<`${Path1}/${Path2}`>;

type HandleChildren<
  Route extends ExtendedRouteObject,
  Base extends string = '',
> = Route['children'] extends ExtendedRouteObject[] ? HandleRoutes<Route['children'], Base> : object;

type HandleRoute<Route extends ExtendedRouteObject, Base extends string = ''> = (Route['id'] extends string
  ? {
      [K in Route['id']]: ConcatPaths<Base, Route['path']>;
    }
  : object) &
  HandleChildren<Route, `${Base}/${Route['path']}`>;

type HandleRoutes<Routes extends ExtendedRouteObject[], Base extends string = ''> = Routes extends [
  infer HeadRoute extends ExtendedRouteObject,
  ...infer TailRoutes extends ExtendedRouteObject[],
]
  ? HandleRoute<HeadRoute, Base> & HandleRoutes<TailRoutes, Base>
  : object;
