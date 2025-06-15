import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

type Callback = (
  key: string,
  value: string | number | boolean,
  parentPath: string
) => void;
type Wrapper = (parentPath: string, wrappedCallback: () => void) => void;

interface TraverseOptions {
  arrayWrapper?: Wrapper;
  objectWrapper?: Wrapper;
}

export function traverseObject<T>(
  obj: T,
  callback: Callback,
  options: TraverseOptions = {},
  parentPath = ""
) {
  const { arrayWrapper, objectWrapper } = options;

  function processWrapper<T>(
    wrapper: Wrapper | undefined,
    parentPath: string,
    items: T[],
    processor: (item: T, index: string) => void
  ) {
    if (wrapper) {
      console.log(`Applying wrapper at path: ${parentPath}`);
      wrapper(parentPath, () => {
        if (items.length === 0) {
          console.warn(`No items found at path: ${parentPath}`);
        }
        items.forEach((item, i) => processor(item, i.toString()));
      });
    } else {
      items.forEach((item, i) => processor(item, i.toString()));
    }
  }

  function processItem(item: unknown, index: string) {
    const newPath = parentPath ? `${parentPath}.${index}` : index;
    if (typeof item === "object" && item !== null) {
      traverseObject(item, callback, options, newPath);
    } else {
      callback(index, item as string | number | boolean, newPath);
    }
  }

  if (Array.isArray(obj)) {
    processWrapper(arrayWrapper, parentPath, obj, processItem);
  } else if (typeof obj === "object" && obj !== null) {
    processWrapper<[string, unknown]>(
      objectWrapper,
      parentPath,
      Object.entries(obj),
      ([key, value]) => {
        const newPath = parentPath ? `${parentPath}.${key}` : key;
        if (typeof value === "object" && value !== null) {
          traverseObject(value, callback, options, newPath);
        } else {
          callback(key, value as string | number | boolean, newPath);
        }
      }
    );
  }
}
