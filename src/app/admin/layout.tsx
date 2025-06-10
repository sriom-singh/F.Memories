import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";

export default async function Layout({ children }: { children: React.ReactNode }) {
  const session = await getServerSession(authOptions);

  // 🔒 Protect this layout: Only allow admins
  if (!session?.user?.isAdmin) {
    redirect("/?error=not-admin");
  }

  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="font-openSans w-screen">
        {children}
      </main>
    </SidebarProvider>
  );
}
