import { ThemeProvider } from "@/components/ThemeProvoder"
import { SidebarInset, SidebarProvider } from "./components/ui/sidebar"
import { AppSideBar } from "@/components/AppSidebar"
import { TooltipProvider } from "@/components/ui/tooltip"
import { Page, PageHeader } from "@/components/Page"
import { DashboardCard } from "@/components/DashboardCard"
import { Header } from "@/components/Header"
import { AppBarChat } from "@/components/AppBarChat"
export const App = () => {
  return <ThemeProvider>
    <TooltipProvider>
      <SidebarProvider>
        <AppSideBar />
        <SidebarInset>
          <Header />
          <main>
            <Page>
              <PageHeader>
              </PageHeader>
              <div className="">
                <DashboardCard
                  title="Vendor breakdown"
                  description="Keep track of vendors and their security ratings. "
                  buttonText="View full report">
                  <AppBarChat />
                </DashboardCard>
              </div>
            </Page>
          </main>
        </SidebarInset>
      </SidebarProvider>
    </TooltipProvider>
  </ThemeProvider>
}