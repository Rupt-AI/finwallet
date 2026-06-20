import { AsyncLocalStorage } from "node:async_hooks";
import { RequestContext } from "./context.types";

const asyncLocalStorage = new AsyncLocalStorage<RequestContext>();

export class ContextManager {
  static run(context: RequestContext, callback: () => void) {
    asyncLocalStorage.run(context, callback);
  }

  static get(): RequestContext | undefined {
    return asyncLocalStorage.getStore();
  }

  static setPartial(update: Partial<RequestContext>) {
    const store = asyncLocalStorage.getStore();
    if (store) {
      Object.assign(store, update);
    }
  }
}