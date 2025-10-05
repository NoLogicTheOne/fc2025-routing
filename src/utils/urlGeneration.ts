import type { GeneratePathProps, ParamsObject } from '../types/link';
import { generatePath as routerGeneratePath } from 'react-router-dom';

export function extractParams<Path extends string>(props: GeneratePathProps<Path>): ParamsObject<Path> | undefined {
  if ('params' in props) {
    return props.params;
  }
}

export function generatePath<Path extends string>(props: GeneratePathProps<Path>): string {
  return routerGeneratePath(props.href, extractParams(props));
}
