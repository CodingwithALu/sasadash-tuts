import { ThemeProvider } from "@/components/ThemeProvoder"
import { SidebarInset, SidebarProvider } from "./components/ui/sidebar"
import { TooltipProvider } from "@/components/ui/tooltip"
import Navbar from "./components/Navbar"
import { BrowserRouter as Router } from "react-router-dom"
import AnimatedRoutes from "./route/AnimatedRoutes"
import { Toaster } from "./components/ui/sonner"
export const App = () => {
  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <TooltipProvider>
        <Router>
          <SidebarProvider>
            <div className="flex min-h-screen w-full bg-background text-foreground">
              {/* <AppSideBar /> */}
              <SidebarInset className="flex flex-col">
                <Navbar />
                <main className="flex-1 pt-20 px-4 md:px-6">
                  <AnimatedRoutes />
                </main>
                <Toaster position="top-center" richColors />
              </SidebarInset>
            </div>
          </SidebarProvider>
        </Router>
      </TooltipProvider>
    </ThemeProvider>
  );
}