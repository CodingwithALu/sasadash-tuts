import { ThemeProvider } from "@/components/ThemeProvoder"
import { SidebarInset, SidebarProvider } from "./components/ui/sidebar"
import { TooltipProvider } from "@/components/ui/tooltip"
import Navbar from "./components/Navbar"
import { BrowserRouter as Router } from "react-router-dom"
import AnimatedRoutes from "./route/AnimatedRoutes"
import { Toaster } from "./components/ui/sonner"
import type { AppProps } from "./interface/AppProps"
import { useEffect, useState } from "react"
import ServicesProvider from "./provider/ServicesProvider"
export const App = (props: AppProps) => {
  // const { configStore } = useStores()
  const [isOnline, setIsOnline] = useState(navigator.onLine)
  // 1. Theo dõi kết nối mạng trên Web
  useEffect(() => {
    const handleOnline = () => setIsOnline(true)
    const handleOffline = () => setIsOnline(false)

    window.addEventListener("online", handleOnline)
    window.addEventListener("offline", handleOffline)

    return () => {
      window.removeEventListener("online", handleOnline)
      window.removeEventListener("offline", handleOffline)
    }
  }, [])

  // // 2. Lấy IP Address
  // useEffect(() => {
  //   fetch("https://api.ipify.org?format=json")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       if (data.ip && configStore?.setIpAddressModel) {
  //         configStore.setIpAddressModel(data.ip)
  //       }
  //     })
  //     .catch((err) => console.log("IP Fetch Error:", err))
  // }, [isOnline, configStore])

  // 3. UI Hiển thị khi mất mạng (Thay thế InternetConnection bên RN)
  const NoInternetOverlay = () => {
    if (isOnline) return null
    return (
      <div className="fixed inset-0 z-[9999] bg-black/50 flex items-center justify-center">
        <div className="bg-white p-8 rounded-lg text-center max-w-sm shadow-xl">
          <img src="/images/no-internet.png" alt="No Internet" className="w-16 h-16 mx-auto mb-4" />
          <h2 className="text-lg font-semibold text-gray-900">Không có kết nối mạng</h2>
          <p className="text-sm text-gray-500 mt-2">Vui lòng kiểm tra lại đường truyền internet của bạn.</p>
        </div>
      </div>
    )
  }
  return (
    <ServicesProvider {...props}>
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
    </ServicesProvider>
  );
}
