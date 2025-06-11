import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/client/components/shadcn/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/client/components/shadcn/table";
import { Forms } from "@/server/interface";

export default function FormsTable({ posts }: { posts: Forms[] }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Forms</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Title</TableHead>
              <TableHead>Description</TableHead>
              <TableHead>Slug</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {posts.map((post) => (
              <TableRow key={post._id}>
                <TableCell>{post.title}</TableCell>
                <TableCell>{post.description}</TableCell>
                <TableCell>{post.slug}</TableCell>
                <TableCell>{post.status}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
