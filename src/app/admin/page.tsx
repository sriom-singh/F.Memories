"use client";

import React, { useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { SiteHeader } from "./components/siteheader";
import { SectionCards } from "./components/SectionCards";

const AdminPage = () => {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "loading") return; // wait until session is loaded

    if (!session?.user?.isAdmin) {
      toast.error("Not an Admin");
      router.push("/");
    }
  }, [session, status, router]);

  return (
    <div className="@container/main flex flex-1 flex-col text-black gap-2">
      <div className="flex flex-col gap-4 w-full py-4 md:gap-6 md:py-6">
        <SiteHeader title="Dashboard" />
        <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
          <SectionCards />
          <div className="px-4 lg:px-6"></div>
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
