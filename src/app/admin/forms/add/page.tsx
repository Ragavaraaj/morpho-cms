"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/client/components/shadcn/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/client/components/shadcn/card";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/client/components/shadcn/form";
import { Input } from "@/client/components/shadcn/input";
import { useRouter } from "next/navigation";
import { z } from "zod";
import { handleCreateForm } from "@/server/actions/formAction";

const FormSchema = z.object({
  title: z.string().min(1, "Title is required"),
  description: z.string().optional(),
  slug: z.string().min(1, "Slug is required"),
  status: z.string().min(1, "Status is required"),
});

type FormValues = z.infer<typeof FormSchema>;

export default function AddForm() {
  const router = useRouter();
  const form = useForm<FormValues>({
    defaultValues: {
      title: "",
      description: "",
      slug: "",
      status: "draft",
    },
    resolver: zodResolver(FormSchema),
  });

  const onSubmit = async (data: FormValues) => {
    const result = await handleCreateForm(data);
    if ("error" in result) {
      // handle error
      alert("Failed to create form");
    } else {
      router.push("/admin/forms");
    }
  };

  return (
    <Card className="max-w-xl mx-auto mt-8">
      <CardHeader>
        <CardTitle>Add New Form</CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              name="title"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Title</FormLabel>
                  <FormControl>
                    <Input placeholder="Form title" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              name="description"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Input placeholder="Form description" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              name="slug"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Slug</FormLabel>
                  <FormControl>
                    <Input placeholder="form-slug" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              name="status"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Status</FormLabel>
                  <FormControl>
                    <Input placeholder="draft or published" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="w-full">
              Create Form
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
