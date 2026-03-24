import { Logo } from "@/assets/Logo";
import { Sidebar, SidebarHeader, SidebarMenu, SidebarMenuItem, useSidebar } from "@/components/ui/sidebar";

/**
 * 
 * Components
 */
export const AppSideBar = () => {
    const { isMobile } = useSidebar();
    return (
        <Sidebar
            variant="floating"
            collapsible="icon"
        >
            {/** Sidebar Header */}
            <SidebarHeader>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <Logo variant={isMobile ? "default" : "icon"}/>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>
        </Sidebar>
    );
}