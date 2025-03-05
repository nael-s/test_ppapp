import { SidebarProvider } from "@/components/ui/sidebar";
import React, { PropsWithChildren } from "react";
import { AppSidebar } from "./dashboard_sidebar";
import { FolderOpen, Slash } from "lucide-react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "../ui/breadcrumb";

const AppLayout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <SidebarProvider>
      <AppSidebar />
      <div className="w-full px-8">
        <header className="flex flex-col h-24 shrink-0 items-start justify-between pl-8 py-4">
          <div className="flex items-center gap-2">
            <FolderOpen size={24} className="text-white/60 fill-black" />
            <p className="capitalize text-lg font-semibold">
              pendataan keluarga satu pintu
            </p>
          </div>
          <div className="flex items-center gap-2 mt-2">
            <p className="capitalize text-sm text-gray-400">
              temukan informasi terkini mengenai keluarga dan individu di DKI
              Jakarta
            </p>
          </div>
        </header>
        <div className="bg-gray-200/30 pl-8 py-2 rounded-md">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/" className="text-black/20">
                  User
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator>
                <Slash className="text-black/20" />
              </BreadcrumbSeparator>
              <BreadcrumbItem>
                <BreadcrumbPage className="text-black/20">
                  Dashboard
                </BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
        <main className="flex flex-1 flex-col gap-4 py-4">{children}</main>
      </div>
    </SidebarProvider>
  );
};

export default AppLayout;
