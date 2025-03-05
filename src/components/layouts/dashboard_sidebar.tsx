import * as React from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubItem,
  SidebarRail,
} from "@/components/ui/sidebar";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "../ui/collapsible";
import {
  BookOpen,
  ChevronRight,
  House,
  LogOut,
  User,
  UserCheck,
} from "lucide-react";
import { Label } from "../ui/label";

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const router = useRouter();
  const isActive = (url: string) => router.pathname.startsWith(url);

  const menu = [
    {
      label: "bnba",
      url: "/",
      icon: <House />,
    },
    {
      label: "katalog",
      url: "/katalog",
      icon: <House />,
    },
    {
      label: "standar data",
      url: "/standar_data",
      icon: <BookOpen />,
    },
    {
      label: "user management",
      url: "/user_management",
      icon: <UserCheck />,
    },
  ];

  return (
    <Sidebar {...props}>
      <div className="flex bg-white p-4 gap-4 items-center justify-center border-b">
        <Image
          src="/images/dppapp.svg"
          alt="dppapp"
          width={80}
          height={80}
          className="object-contain"
        />
        <Image
          src="/images/tp_pkk.svg"
          alt="tp_pkk"
          width={80}
          height={80}
          className="object-contain"
        />
      </div>

      <SidebarContent>
        <Collapsible className="group/collapsible list-none pt-4">
          <SidebarMenuItem>
            <CollapsibleTrigger asChild>
              <SidebarMenuButton className=" text-white hover:bg-transparent">
                <div className="flex items-center gap-2 justify-between w-full">
                  <div className="w-8 h-8 flex items-center justify-center rounded-full bg-white/10">
                    <User className="w-7 h-7 p-1" />
                  </div>
                  <span className="flex-1 text-white uppercase truncate">
                    Carik Kantor Pusat
                  </span>
                  <ChevronRight className="w-5 h-5 text-gray-300" />
                </div>
              </SidebarMenuButton>
            </CollapsibleTrigger>
            <CollapsibleContent>
              <SidebarMenuSub className="list-none">
                <SidebarMenuSubItem>
                  <Link href="/submenu-1">
                    <SidebarMenuButton
                      className={
                        isActive("/submenu-1") ? "bg-primary text-white" : ""
                      }
                    >
                      Submenu 1
                    </SidebarMenuButton>
                  </Link>
                </SidebarMenuSubItem>
              </SidebarMenuSub>
            </CollapsibleContent>
          </SidebarMenuItem>
        </Collapsible>

        <SidebarGroup className="overflow-hidden">
          <SidebarGroupLabel>
            <SidebarGroupLabel>
              <div className="rounded-sm bg-violet-700/90">
                <p className="uppercase !text-[10px] !font-thin text-white mx-1">
                  Menu Utama
                </p>
              </div>
            </SidebarGroupLabel>
          </SidebarGroupLabel>

          <SidebarMenu className="mt-2">
            {menu.map((item, index) => (
              <SidebarMenuItem key={index} className="my-1">
                <Link href={item.url}>
                  <SidebarMenuButton
                    className={` ${
                      isActive(item.url)
                        ? "bg-red-400 text-white h-12 ml-4"
                        : "h-10"
                    } hover:bg-transparent`}
                  >
                    <div className="flex items-center gap-4">
                      {item.icon && (
                        <div className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 p-3">
                          {React.cloneElement(item.icon, {
                            className: "w-5 h-5 text-white",
                          })}
                        </div>
                      )}
                      <Label className="uppercase text-white cursor-pointer">
                        {item.label}
                      </Label>
                    </div>
                  </SidebarMenuButton>
                </Link>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>

      <div className="mt-auto">
        <SidebarMenuItem>
          <Link href="/logout">
            <SidebarMenuButton className="text-white h-12 hover:bg-transparent">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 p-3">
                  <LogOut className="w-5 h-5 text-white" />
                </div>
                <Label className="uppercase text-white cursor-pointer">
                  Keluar
                </Label>
              </div>
            </SidebarMenuButton>
          </Link>
        </SidebarMenuItem>
      </div>
    </Sidebar>
  );
}
