import type { ReactNode } from "react";

import { AppSidebar } from "@/components/AppSidebar";
import { SidebarProvider } from "@/components/ui/sidebar";

// Telas internas (Home, Dish, Payment) com a sidebar; login e cadastro ficam de fora
export default function AppLayout({ children }: { children: ReactNode }) {
  return (
    <SidebarProvider defaultOpen={false}>
      <AppSidebar />
      <div className="min-w-0 flex-1">{children}</div>
    </SidebarProvider>
  );
}
