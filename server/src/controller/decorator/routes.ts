import "reflect-metadata";

import { Method } from "./Method";
import { MetadataKeys } from "./MetadataKeys";

function routerBinder(method: string) {
  return function (path: string) {
    return function (target: any, key: string, desc: PropertyDescriptor) {
      Reflect.defineMetadata(MetadataKeys.path, path, target, key);
      Reflect.defineMetadata(MetadataKeys.method, method, target, key);
    };
  };
}

export const get = routerBinder(Method.get);
export const put = routerBinder(Method.put);
export const post = routerBinder(Method.post);
export const del = routerBinder(Method.del);
