import type { ParamsProps } from '../types/link';
import { Link, type LinkProps, type To } from 'react-router-dom';
import { generatePath } from '../utils/urlGeneration';

export function TypedLink<Path extends string>({
  to,
  params,
  ...props
}: LinkProps & { to: Path | (To & { pathname: Path }) } & ParamsProps<Path>) {
  const fullTo: To =
    typeof to === 'string'
      ? generatePath(to, params)
      : {
          ...to,
          pathname: generatePath(to.pathname, params),
        };

  return <Link {...props} to={fullTo} />;
}
