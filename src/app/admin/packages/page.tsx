"use client";
import React, { useEffect } from "react";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import { Session } from "next-auth";
import { toast } from "sonner";
import { SiteHeader } from "../components/siteheader";
import { SidebarHeader, SidebarTrigger } from "@/components/ui/sidebar";
import { Chart } from "../components/Chart";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { CreatePackage } from "../components/CreatePackageSheet";

const page = () => {
  const session: any = useSession();
  console.log(session.status);

  useEffect(() => {
    if (!session.data?.user?.isAdmin) {
      console.log("admin");
      toast.error("Not an Admin");
      redirect("/");
    }
  }, [session]);
  return (
    <div className="@container/main flex flex-1 flex-col text-black gap-2">
      <div className="flex flex-col gap-4 ">
        <header className="flex h-(--header-height)  pt-4 pb-2 md:gap-6  shrink-0 items-center gap-2 border-b transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-(--header-height)">
          <div className="flex w-full items-center gap-1 px-4 lg:gap-2 lg:px-6">
            <SidebarTrigger className="-ml-1" />
            <Separator
              orientation="vertical"
              className="mx-2 data-[orientation=vertical]:h-4"
            />
            <h1 className="text-base font-medium">Package</h1>
            <div className="ml-auto flex items-center gap-2">
              {/* <Button size={"sm"} className="text-xs">
                Create Package
              </Button> */}
              <CreatePackage />
            </div>
          </div>
        </header>
        <div className="flex px-6 gap-4 py-4 ">
          <div className="px-4 lg:px-6"></div>
        </div>
      </div>
    </div>
  );
};

export default page;
