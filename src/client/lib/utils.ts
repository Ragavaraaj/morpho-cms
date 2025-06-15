import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

type Callback = (props: {
  name: string;
  value: string | number | boolean;
  parentPath: string;
}) => React.ReactNode;
type Wrapper = (
  parentPath: string,
  wrappedCallback: () => React.ReactNode
) => React.ReactNode;

interface TraverseOptions {
  arrayWrapper?: Wrapper;
  objectWrapper?: Wrapper;
}

export function traverseObject<T>(
  obj: T,
  callback: Callback,
  options: TraverseOptions = {},
  parentPath = ""
): React.ReactNode {
  const { arrayWrapper, objectWrapper } = options;

  function processWrapper<T>(
    wrapper: Wrapper | undefined,
    parentPath: string,
    items: T[],
    processor: (item: T, index: string) => React.ReactNode
  ) {
    if (items.length === 0 && !wrapper) {
      return processor(null as T, "0");
    }

    if (items.length === 0 && wrapper) {
      return wrapper(parentPath, () => null);
    }

    if (items.length !== 0 && wrapper) {
      return wrapper(parentPath, () =>
        items.map((item, i) => processor(item, i.toString()))
      );
    }

    if (items.length !== 0 && !wrapper) {
      return items.map((item, i) => processor(item, i.toString()));
    }
  }

  function processItemForArray(item: unknown, index: string): React.ReactNode {
    const newPath = parentPath ? `${parentPath}.${index}` : index;
    if (typeof item === "object" && item !== null) {
      return traverseObject(item, callback, options, newPath);
    } else {
      return callback({
        name: index,
        value: item as string | number | boolean,
        parentPath: newPath,
      });
    }
  }

  function processItemForObject([key, value]: [
    string,
    unknown
  ]): React.ReactNode {
    const newPath = parentPath ? `${parentPath}.${key}` : key;
    if (typeof value === "object" && value !== null) {
      return traverseObject(value, callback, options, newPath);
    } else {
      return callback({
        name: key,
        value: value as string | number | boolean,
        parentPath: newPath,
      });
    }
  }

  if (Array.isArray(obj)) {
    return processWrapper(arrayWrapper, parentPath, obj, processItemForArray);
  } else if (typeof obj === "object" && obj !== null) {
    return processWrapper<[string, unknown]>(
      objectWrapper,
      parentPath,
      Object.entries(obj),
      processItemForObject
    );
  }
}
