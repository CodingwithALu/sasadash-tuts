import { ThemeProvider } from "@/components/ThemeProvoder"
import { SidebarInset, SidebarProvider } from "./components/ui/sidebar"
import { AppSideBar } from "@/components/AppSidebar"
import { TooltipProvider } from "@/components/ui/tooltip"
import { Page, PageHeader } from "./components/Page"
import { DashboardCard } from "./components/DashboardCard"
import { Header } from "@/components/Header"
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
                <DashboardCard></DashboardCard>
              </div>
            </Page>
          </main>
        </SidebarInset>
      </SidebarProvider>
    </TooltipProvider>
  </ThemeProvider>
}