import type { PathParam } from 'react-router-dom';
import type { Prettify } from './common';

// type ExtractParam<Segment extends string> = PathParam<Segment>;

// type ExtractParams<Path extends string> = Path extends `${infer Head}/${infer Rest}`
//   ? ExtractParam<Head> | ExtractParams<Rest>
//   : ExtractParam<Path>;

export type ParamsObject<Path extends string> = Record<PathParam<Path>, string>;

export type ParamsProps<Path extends string> =
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  Record<string, never> extends ParamsObject<Path> ? {} : { params: Prettify<ParamsObject<Path>> };

export type GeneratePathProps<Path extends string> = { href: string } & ParamsProps<Path>;
