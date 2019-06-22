import { Mirror, throttleOptions, listenerHandler, hookResetter, blockClass } from './types';
import { INode } from 'rrweb-snapshot';
export declare function on(type: string, fn: EventListenerOrEventListenerObject, target?: Document | Window): listenerHandler;
export declare const mirror: Mirror;
export declare function throttle<T>(func: (arg: T) => void, wait: number, options?: throttleOptions): () => void;
export declare function hookSetter<T>(target: T, key: string | number | symbol, d: PropertyDescriptor): hookResetter;
export declare function getWindowHeight(): number;
export declare function getWindowWidth(): number;
export declare function isBlocked(node: Node | null, blockClass: blockClass): boolean;
export declare function isAncestorRemoved(target: INode): boolean;
export declare function isTouchEvent(event: MouseEvent | TouchEvent): event is TouchEvent;
