import { useState } from "react";
import { traverseObject } from "@/client/lib/utils";
import { FieldSelector } from "@/client/components/forms/field-select";
import { ArrayAccordion } from "@/client/components/forms//array-accordion";
import { ObjectCardWrapper } from "@/client/components/forms//object-card-wrapper";

type ObjectCardProps<T> = {
  obj: T;
  title?: string;
};

export function TraverseRender<T>({
  obj,
  title,
}: Readonly<ObjectCardProps<T>>) {
  const [expanded, setExpanded] = useState<string[]>([]);

  // Patch: wrap the callback to return a fragment so traverseObject gets ReactNode
  const arrayWrapper = (
    parentPath: string,
    wrappedCallback: () => React.ReactNode
  ) => {
    return (
      <ArrayAccordion
        parentPath={parentPath}
        expanded={expanded}
        setExpanded={setExpanded}
      >
        {wrappedCallback()}
      </ArrayAccordion>
    );
  };

  const objectWrapper = (
    parentPath: string,
    wrappedCallback: () => React.ReactNode
  ) => (
    <ObjectCardWrapper parentPath={parentPath} title={title}>
      {wrappedCallback()}
    </ObjectCardWrapper>
  );

  return traverseObject(
    obj,
    (props) => <FieldSelector {...props} key={props.parentPath + props.name} />,
    { arrayWrapper, objectWrapper }
  );
}
