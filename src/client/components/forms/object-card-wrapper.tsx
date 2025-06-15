import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/client/components/shadcn/card";

interface ObjectCardWrapperProps {
  parentPath: string;
  title?: string;
  children: React.ReactNode;
}

export function ObjectCardWrapper({
  parentPath,
  title,
  children,
}: Readonly<ObjectCardWrapperProps>) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{parentPath || title}</CardTitle>
      </CardHeader>
      <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {children}
      </CardContent>
    </Card>
  );
}
