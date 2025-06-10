"use client";
import React, { useEffect } from "react";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import { Session } from "next-auth";
import { toast } from "sonner";
import { SiteHeader } from "./components/siteheader";
import { SidebarHeader, SidebarTrigger } from "@/components/ui/sidebar";
import { Chart } from "./components/Chart";
import { SectionCards } from "./components/SectionCards";

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
      <div className="flex flex-col gap-4 w-full py-4 md:gap-6 md:py-6">
        <SiteHeader title="Dashboard" />
        <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
          {" "}
          {/* <Chart />
        <Chart />
        <Chart />
        <Chart /> */}
          <SectionCards />
          <div className="px-4 lg:px-6"></div>
        </div>
      </div>
    </div>
  );
};

export default page;
