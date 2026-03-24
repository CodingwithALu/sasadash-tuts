import { ThemeProvider } from "@/components/ThemeProvoder"
import { SidebarInset, SidebarProvider } from "./components/ui/sidebar"
import { AppSideBar } from "./components/AppSidebar"
export const App = () => {
  return <ThemeProvider>
    <SidebarProvider open = {false}>
      <AppSideBar />
      <SidebarInset>
      </SidebarInset>
    </SidebarProvider>
  </ThemeProvider>
}