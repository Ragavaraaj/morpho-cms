import * as React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/client/components/shadcn/accordion";

type ArrayAccordionProps = {
  parentPath: string;
  children: React.ReactNode | null;
  expanded: string[];
  setExpanded: (v: string[]) => void;
};

export function ArrayAccordion({
  parentPath,
  children,
  expanded,
  setExpanded,
}: Readonly<ArrayAccordionProps>) {
  return (
    <Accordion type="multiple" value={expanded} onValueChange={setExpanded}>
      <AccordionItem value={parentPath}>
        <AccordionTrigger>{parentPath}</AccordionTrigger>
        {children && <AccordionContent>{children}</AccordionContent>}
      </AccordionItem>
    </Accordion>
  );
}
