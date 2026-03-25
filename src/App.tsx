import { ThemeProvider } from "@/components/ThemeProvoder"
import { SidebarInset, SidebarProvider } from "./components/ui/sidebar"
import { AppSideBar } from "@/components/AppSidebar"
import { TooltipProvider } from "@/components/ui/tooltip"
import { Header } from "./components/header"
import { Page, PageHeader } from "./components/Page"
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
            </Page>
          </main>
        </SidebarInset>
      </SidebarProvider>
    </TooltipProvider>
  </ThemeProvider>
}