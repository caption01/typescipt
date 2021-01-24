"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.del = exports.post = exports.put = exports.get = void 0;
require("reflect-metadata");
var Method_1 = require("./Method");
var MetadataKeys_1 = require("./MetadataKeys");
function routerBinder(method) {
    return function (path) {
        return function (target, key, desc) {
            Reflect.defineMetadata(MetadataKeys_1.MetadataKeys.path, path, target, key);
            Reflect.defineMetadata(MetadataKeys_1.MetadataKeys.method, method, target, key);
        };
    };
}
exports.get = routerBinder(Method_1.Method.get);
exports.put = routerBinder(Method_1.Method.put);
exports.post = routerBinder(Method_1.Method.post);
exports.del = routerBinder(Method_1.Method.del);
