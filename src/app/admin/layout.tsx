import { AppSidebar } from "@/client/components/app-sidebar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/client/components/shadcn/breadcrumb";
import { Separator } from "@/client/components/shadcn/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/client/components/shadcn/sidebar";
import { type ReactNode } from "react";
import { requireAuth } from "@/client/lib/require-auth";

function getBreadcrumbs(pathname: string) {
  const pathParts = pathname.split("/").filter(Boolean);
  const breadcrumbs: { label: string; href?: string }[] = [
    { label: "Acme Inc", href: "/admin" },
  ];
  // Pages
  if (pathParts[1] === "pages") {
    breadcrumbs.push({ label: "Pages", href: "/admin/pages" });
    if (pathParts[2] === "edit" && pathParts[3]) {
      breadcrumbs.push({ label: `Edit Page of (${pathParts[3]})` });
    } else if (pathParts[2] === "add") {
      breadcrumbs.push({ label: "Add Page" });
    }
  }
  // Forms
  if (pathParts[1] === "forms") {
    breadcrumbs.push({ label: "Forms", href: "/admin/forms" });
    if (pathParts[2] === "edit" && pathParts[3]) {
      breadcrumbs.push({ label: `Edit Form of (${pathParts[3]})` });
    } else if (pathParts[2] === "add") {
      breadcrumbs.push({ label: "Add Form" });
    }
  }
  // Blog
  if (pathParts[1] === "blog") {
    breadcrumbs.push({ label: "Blog", href: "/admin/blog" });
    if (pathParts[2] === "edit" && pathParts[3]) {
      breadcrumbs.push({ label: `Edit Blog Post of (${pathParts[3]})` });
    } else if (pathParts[2] === "add") {
      breadcrumbs.push({ label: "Add Blog Post" });
    }
  }
  // Gallery
  if (pathParts[1] === "gallery") {
    breadcrumbs.push({ label: "Gallery", href: "/admin/gallery" });
    if (pathParts[2] === "edit" && pathParts[3]) {
      breadcrumbs.push({ label: `Edit Gallery Item of (${pathParts[3]})` });
    } else if (pathParts[2] === "add") {
      breadcrumbs.push({ label: "Add Gallery Item" });
    }
  }
  return breadcrumbs;
}

export default async function Layout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  const session = await requireAuth();
  // Use a static path for SSR since headers() is not synchronous and cannot be used for this purpose
  // Always fallback to /admin for SSR, and use a client component for dynamic breadcrumbs if needed
  const path = "/admin";
  const breadcrumbs = getBreadcrumbs(path);

  return (
    <SidebarProvider>
      <AppSidebar user={session?.user} />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator
              orientation="vertical"
              className="mr-2 data-[orientation=vertical]:h-4"
            />
            <Breadcrumb>
              <BreadcrumbList>
                {breadcrumbs.map((crumb, idx) => (
                  <BreadcrumbItem key={crumb.label}>
                    {crumb.href && idx < breadcrumbs.length - 1 ? (
                      <BreadcrumbLink href={crumb.href}>
                        {crumb.label}
                      </BreadcrumbLink>
                    ) : (
                      <BreadcrumbPage>{crumb.label}</BreadcrumbPage>
                    )}
                    {idx < breadcrumbs.length - 1 && <BreadcrumbSeparator />}
                  </BreadcrumbItem>
                ))}
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">{children}</div>
      </SidebarInset>
    </SidebarProvider>
  );
}
