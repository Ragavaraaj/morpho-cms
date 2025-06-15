import * as React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/client/components/shadcn/accordion";

type ArrayAccordionProps = {
  parentPath: string;
  children: React.ReactNode;
  expanded: string[];
  setExpanded: (v: string[]) => void;
};

export function ArrayAccordion({
  parentPath,
  children,
  expanded,
  setExpanded,
}: Readonly<ArrayAccordionProps>) {
  if (children === null) {
    return (
      <Accordion type="multiple" value={expanded} onValueChange={setExpanded}>
        <AccordionItem value={parentPath}>
          <AccordionTrigger>{parentPath}</AccordionTrigger>
        </AccordionItem>
      </Accordion>
    );
  }
  return (
    <Accordion type="multiple" value={expanded} onValueChange={setExpanded}>
      <AccordionItem value={parentPath}>
        <AccordionTrigger>{parentPath}</AccordionTrigger>
        <AccordionContent>{children}</AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
