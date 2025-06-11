"use client";

import * as React from "react";
import {
  AudioWaveform,
  BookOpen,
  Command,
  Frame,
  GalleryVerticalEnd,
  Map,
  PieChart,
  FileText,
  FilePlus,
  ListOrdered,
  Image,
  FormInput,
} from "lucide-react";

import { NavMain } from "@/client/components/nav-main";
import { NavProjects } from "@/client/components/nav-projects";
import { NavUser } from "@/client/components/nav-user";
import { TeamSwitcher } from "@/client/components/team-switcher";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/client/components/shadcn/sidebar";

// This is sample data.
const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  teams: [
    {
      name: "Acme Inc",
      logo: GalleryVerticalEnd,
      plan: "Enterprise",
    },
    {
      name: "Acme Corp.",
      logo: AudioWaveform,
      plan: "Startup",
    },
    {
      name: "Evil Corp.",
      logo: Command,
      plan: "Free",
    },
  ],
  navMain: [
    {
      title: "Forms",
      url: "/admin/forms",
      icon: FormInput,
      isActive: true,
      items: [
        { title: "Add New Form", url: "/admin/forms/add", icon: FilePlus },
        { title: "Show All Forms", url: "/admin/forms", icon: ListOrdered },
      ],
    },
    {
      title: "Pages",
      url: "/admin/pages",
      icon: FileText,

      items: [
        { title: "Add New Page", url: "/admin/pages/add", icon: FilePlus },
        { title: "Show All Pages", url: "/admin/pages", icon: ListOrdered },
      ],
    },
    {
      title: "Blog",
      url: "/admin/blog",
      icon: BookOpen,
      items: [
        { title: "Add New Blog Post", url: "/admin/blog/add", icon: FilePlus },
        { title: "Show All Blog Posts", url: "/admin/blog", icon: ListOrdered },
      ],
    },
    {
      title: "Gallery",
      url: "/admin/gallery",
      icon: Image,
      items: [
        {
          title: "Add New Gallery Item",
          url: "/admin/gallery/add",
          icon: FilePlus,
        },
        {
          title: "Show All Gallery Items",
          url: "/admin/gallery",
          icon: ListOrdered,
        },
      ],
    },
  ],
  projects: [
    {
      name: "Design Engineering",
      url: "#",
      icon: Frame,
    },
    {
      name: "Sales & Marketing",
      url: "#",
      icon: PieChart,
    },
    {
      name: "Travel",
      url: "#",
      icon: Map,
    },
  ],
};

export function AppSidebar({
  user,
  ...props
}: {
  user?: { name?: string | null; email?: string | null; image?: string | null };
} & React.ComponentProps<typeof Sidebar>) {
  // Normalize user for NavUser
  const normalizedUser = user
    ? {
        name: user.name ?? "User",
        email: user.email ?? "",
        avatar: user.image ?? "/avatars/shadcn.jpg",
      }
    : data.user;
  return (
    <Sidebar collapsible="icon" className="min-h-screen" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavProjects projects={data.projects} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={normalizedUser} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
