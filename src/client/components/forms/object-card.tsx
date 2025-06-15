import { useState } from "react";
import { traverseObject } from "@/client/lib/utils";
import { FieldSelector } from "@/client/components/forms/field-select";
import { ArrayAccordion } from "@/client/components/forms//array-accordion";
import { ObjectCardWrapper } from "@/client/components/forms//object-card-wrapper";

type ObjectCardProps<T> = {
  obj: T;
  title?: string;
};

export function ObjectCard<T>({ obj, title }: Readonly<ObjectCardProps<T>>) {
  const [expanded, setExpanded] = useState<string[]>([]);

  // Patch: wrap the callback to return a fragment so traverseObject gets ReactNode
  const arrayWrapper = (parentPath: string, wrappedCallback: () => void) => (
    <ArrayAccordion
      parentPath={parentPath}
      expanded={expanded}
      setExpanded={setExpanded}
    >
      <>{wrappedCallback()}</>
    </ArrayAccordion>
  );

  const objectWrapper = (parentPath: string, wrappedCallback: () => void) => (
    <ObjectCardWrapper parentPath={parentPath} title={title}>
      <>{wrappedCallback()}</>
    </ObjectCardWrapper>
  );

  const fields: React.ReactNode[] = [];
  traverseObject(
    obj,
    (key, value, path) => {
      fields.push(
        <FieldSelector
          keyName={key}
          path={path}
          value={value}
          key={path + key}
        />
      );
    },
    { arrayWrapper, objectWrapper }
  );

  return <>{fields}</>;
}
