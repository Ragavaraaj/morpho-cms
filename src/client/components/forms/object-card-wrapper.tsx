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
    <Card className="mb-4">
      <CardHeader>
        <CardTitle>{parentPath || title}</CardTitle>
      </CardHeader>
      <CardContent>{children}</CardContent>
    </Card>
  );
}
