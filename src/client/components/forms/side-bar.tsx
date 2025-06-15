"use client";

import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
} from "../shadcn/form";
import { Switch } from "@/client/components/shadcn/switch";
import { useFormContext } from "@/client/hooks/useFormDataConext";
import { Button } from "@/client/components/shadcn/button";

export function FormSideBar() {
  const context = useFormContext();

  return (
    <div className="max-w-1/5">
      <FormField
        control={context?.form?.control}
        name="status"
        render={({ field }) => (
          <FormItem className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm">
            <div className="space-y-1 pr-2">
              <FormLabel>Published Status</FormLabel>
              <FormDescription>
                Control the published status of the form.
              </FormDescription>
            </div>
            <FormControl>
              <Switch
                checked={Boolean(field.value)}
                onCheckedChange={field.onChange}
              />
            </FormControl>
          </FormItem>
        )}
      />
      <Button type="submit">Save Changes</Button>
    </div>
  );
}
