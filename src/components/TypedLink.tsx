import type { ParamsProps } from '../types/link';
import { Link, type LinkProps, type To } from 'react-router-dom';
import { generatePath } from '../utils/urlGeneration';

export function TypedLink<Path extends string>(
  props: Omit<LinkProps, 'to'> & { to: Path | (To & { pathname: Path }) } & ParamsProps<Path>,
) {
  const to: To =
    typeof props.to === 'string'
      ? generatePath({ ...props, href: props.to })
      : {
          pathname: generatePath({ ...props, href: props.to.pathname }),
          search: props.to.search,
          hash: props.to.hash,
        };

  return <Link {...props} to={to} />;
}
