import type { PathParam } from 'react-router-dom';
import type { Prettify } from './common';

export type ParamsObject<Path extends string> = Record<PathParam<Path>, string>;

export type ParamsProps<Path extends string> =
  Record<string, never> extends ParamsObject<Path> ? { params?: undefined } : { params: Prettify<ParamsObject<Path>> };
